const db = require("../models");

module.exports = {
    createNewProduct(req, res) {

        const product = req.body;

        db.Product.create({
            name: product.name,
            image_url: product.image_url,
            price: product.price,
            year: product.year,
            quantity: product.quantity,
            description: product.description,
            genre: product.genre,
            actors: product.actors,
            director: product.director,
            rating: product.director,
            format: product.format
        }).then(result => {
            res.status(201).json(result.dataValues);
        }).catch(error => {
            res.status(422).json({ error: "Couldn't create product" });
        })
    },

    getAllProducts(req, res) {

        db.Product.findAll()
        .then(result => {
            console.log(result);
            const response = result.map(({dataValues}) => dataValues);

            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({error: "Couldn't process request"});
        })
    },

    updateProduct(req, res) {
        const product = req.body;

        db.Product.update({
            name: product.name,
            image_url: product.image_url,
            price: product.price,
            year: product.year,
            quantity: product.quantity,
            description: product.description,
            genre: product.genre,
            actors: product.actors,
            director: product.director,
            rating: product.director,
            format: product.format
        },{where:{id:product.id}}).then(result => {
            if(result[0] === 0)return  res.status(404).json({error: "Couldn't update anything"});
            
            res.status(200).json({success: "Succussfully updated product"});
        }).catch(error => {
            res.status(500).json({error: "Couldn't process update reqest"});
        });
    },

    getProductById(req, res){
        db.Product.findOne({where:{id:req.params.id}}).then(result => {
            res.status(200).json(result.dataValues);
        }).catch(error => {
            res.status(404).json({error: "Couldn't find product"});
        })
    }


}