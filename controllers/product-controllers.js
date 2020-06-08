const db = require("../models");

module.exports = {
    createNewProduct(req, res) {

        const product = req.body;

        console.log(product);

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
            res.status(201).json(result.get());
        }).catch(error => {
            res.status(422).json({ error: "Couldn't create product" });
        })
    },

    getAllProducts(req, res) {

        db.Product.findAll({where:{isAvailable:true}})
        .then(result => {
            const response = result.map((product) => product.get());

            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({error: "Couldn't process request"});
        })
    },

    updateProduct(req, res) {
        const product = req.body;

        if(product.id === undefined) return res.status(400).json({error: "Missing Information"});

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
            res.status(200).json(result.get());
        }).catch(error => {
            res.status(404).json({error: "Couldn't find product"});
        })
    },

    deleteProduct(req, res){
        console.log(req.params.id)
        if(req.params.id === undefined || !(/^[0-9]+$/.test(req.params.id))) return res.status(400).json({error: "Invalid product id"});

        db.Product.update({isAvailable: false},{where:{id:req.params.id}}).then(result => {
            return res.status(200).json({success: "Successfully deleted product"});
        }).catch(error => {
            return res.status(400).json({error: "Could not process request"});
        })
    }


}