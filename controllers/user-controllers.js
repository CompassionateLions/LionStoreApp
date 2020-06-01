const db = require("../models");
const bcrypt = require('bcrypt');

//Validate password function returns false if password not valid
const validatePassword = (password) => {
    return true
}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(email);
}

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if(err) return reject(err);

            return resolve(hash);
        })
    })
}

module.exports = {
    signup(req, res){
        const {body:{email, password, confirmpassword}} = req;

        if(!email.length || !password.length || !confirmpassword.length) return res.status(400).json({error: "Missing information"})

        if(password !== confirmpassword) return res.status(400).json({error: "Passwords don't match"});

        if(!validatePassword(password)) return res.status(400).json({error:"Password doesn't meet requirements"});

        if(!validateEmail(email)) return res.status(400).json({error: "Not a valid email address"});

        db.User.findAll({where:{email}}).then(async result => {
            if(result.length != 0) return res.status(403).json({error: "Email already Exists"});

            passwordHash = await hashPassword(password);

            db.User.create({
                email,
                password: passwordHash
            }).then(result => {

                const response = {id: result.id, email: result.email}

                res.status(200).json(response);
            }).catch(error => {
                res.status(500).json({error: "Error signing up"});
            })

        }).catch(error => {
            res.status(500).json({error: "Error signing up"})
        })


    },

    login(req, res){

    },
    
    getUserInfo(req, res){
        const id = req.params.id;

        db.User.findOne({where:{id}}).then(result => {
            const response = {
                id: result.dataValues.id,
                email: result.dataValues.email
            }

            res.status(200).json(response);
        }).catch(error => {
            res.status(404).json({error: "Couldn't find user"})
        })
    },
}