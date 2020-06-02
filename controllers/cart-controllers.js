const db = require("../models");

module.exports = {
    //Get cart for authed user
    getCartAuthedUser(req, res) {
        //If middlewear didn't add user object to req then return (shouldn't happen)
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        db.User.findOne({ where: { id: user.id }, include: ['CartContents'] }).then(result => {
            console.log(result);

            res.status(200).json(result);
        }).catch(error => {
            res.status(404).json({ error: "Couldn't get cart" })
        })
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

            const productStock = product.dataValues.quantity;

            if(productStock === 0) return res.status(400).json({error: "No stock left"});

            //If user has it in cart already, increment quantity
            return user.hasCartContents(product).then(hasInCart => {

                
                //if already in cart
                if (hasInCart) {
                    
                    for(cartItem of user.dataValues.CartContents){
                        //Iterate through users current cart items and find the one they're trying to add
                        if(cartItem.dataValues.id === product.dataValues.id){
                            
                            //If they're trying to add more than we have then throw an error
                            if(cartItem.dataValues.Cart.quantity + 1 > productStock){
                                return res.status(400).json({error: "Not enough stock to add to cart"});
                                
                            } else {
                                return cartItem.dataValues.Cart.increment('quantity').then(result => {
                                    res.status(200).json(result);
                                })
                            }
                        }
                    }

                    //else add to cart
                } else {
                    return user.addCartContents(product).then(result => {
                        res.status(200).json(result);

                    })
                }
            })
        }).catch(error => {
            res.status(400).json({ error: "Error adding to cart" });
        })
    }
}