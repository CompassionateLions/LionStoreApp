const db = require("../models");

const sendUserCartBack = (req, res) => {
    const user = req.user;

    db.User.findOne({ where: { id: user.id }, include: ['CartContents'] }).then(result => {

        //Construct cart in json format with only relevant fields to return
        const response = result.CartContents.map(item => {
            return {
                productId: item.id,
                name: item.name,
                image_url: item.image_url,
                price: item.price,
                year: item.year,
                description: item.description,
                genre: item.description,
                genre: item.genre,
                actors: item.actors,
                director: item.director,
                format: item.format,
                rating: item.rating,
                quantity: item.Cart.quantity
            }
        });

        return res.status(200).json(response);

    }).catch(error => {
        res.status(500).json({ error: "Couldn't get cart" });
    })
}


module.exports = {
    //Get cart for authed user
    getCartAuthedUser(req, res) {
        //If middlewear didn't add user object to req then return (shouldn't happen)
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        return sendUserCartBack(req, res);
    },

    addProductToCart(req, res) {
        //If middlewear didn't add user object to req then return (shouldn't happen)
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        if (req.params.productId == undefined) return res.status(400).json({ error: "No ID supplied" });

        //Get Product and user instances
        return Promise.all([
            db.Product.findOne({ where: { id: req.params.productId } }),
            db.User.findOne({ where: { id: req.user.id }, include: ['CartContents'] })
        ]).then(([product, user]) => {

            const productStock = product.quantity;

            if (productStock === 0) return res.status(400).json({ error: "No stock left" });

            //If user has it in cart already, increment quantity
            return user.hasCartContents(product).then(hasInCart => {


                //if already in cart
                if (hasInCart) {

                    for (cartItem of user.CartContents) {
                        //Iterate through users current cart items and find the one they're trying to add
                        if (cartItem.id === product.id) {

                            //If they're trying to add more than we have then throw an error
                            if (cartItem.Cart.quantity + 1 > productStock) {
                                res.status(400).json({ error: "Not enough stock to add to cart" });

                            } else {
                                return cartItem.Cart.increment('quantity').then(result => {
                                    sendUserCartBack(req, res);
                                })
                            }
                        }
                    }

                    //else add to cart
                } else {
                    return user.addCartContents(product).then(result => {
                        return sendUserCartBack(req, res);

                    })
                }
            })
        }).catch(error => {
            console.log(error);
            res.status(400).json({ error: "Error adding to cart" });
        })
    },

    removeFromCart(req, res) {

        //Make sure there is an authed user
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        //Error if no ID supplied
        if (req.params.productId === undefined) return res.status(400).json({ error: "Missing product id" });


        return Promise.all([
            db.User.findOne({ where: { id: req.user.id } }),
            db.Product.findOne({ where: { id: req.params.productId } })
        ]).then(([user, product]) => {
            user.removeCartContents(product).then(result => {
                if (result === 0) return res.status(400).json({ error: "Error removing from cart" });

                return sendUserCartBack(req, res);
            })
        }).catch(error => {
            res.status(400).json({ error: "Couldn't remove product from cart" })
        })

    },

    updateCartQuantity(req, res) {

        //Make sure there is an authed user
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        const { body: { productId, newQuantity } } = req;

        if (productId === undefined || newQuantity === undefined) return res.status(400).json({ error: "Missing information" });

        if(newQuantity < 1 || !(/^[0-9]+$/.test(newQuantity))) return res.status(400).json({ error: "Quantity must be an integer greater than 0" });

        //Check to make sure we have enough quantity in shop

        return Promise.all([
            db.User.findOne({ where: { id: req.user.id }, include: ['CartContents'] }),
            db.Product.findOne({ where: { id: productId } })
        ]).then(([user, product]) => {

            //If there is stock in the store
            if (product.quantity >= newQuantity) {

                for (cartItem of user.CartContents) {

                    //Iterate through users current cart items and find the one they're trying to update
                    if (cartItem.id === product.id) {

                        return cartItem.Cart.update({quantity: newQuantity}).then(result => {
                            return sendUserCartBack(req, res);
                        })

                    }
                }
                
                //If not found in cart add to cart with specific quantity
                return user.addCartContents(product, {through:{quantity: newQuantity}}).then(result => {
                    return sendUserCartBack(req, res);
                })

            } else {
                return res.status(400).json({ error: "Not enough stock" });
            }
        }).catch(error => {
            return res.status(500).json({ error: "Error while updating cart" });
        })

    },

    removeAllFromCart(req, res) {

        //Make sure there is an authed user
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        db.User.findOne({ where: { id: req.user.id } }).then( user => {

            user.setCartContents([]).then(result => {
                res.status(200).json({success: "Cart has been emptied"});
            });
        
        }).catch(error => {
            res.status(400).json({ error: "Couldn't remove product(s) from cart" })
        })
    }
}