const db = require("../models");

const formatOrder = (order) => {
    return {
        userId: order.UserId,
        orderId: order.id,
        total: order.total,
        orderPlaced: order.createdAt,
        productsInOrder: order.Products.map(product => {
            return {
                productId: product.id,
                name: product.name,
                format: product.format,
                individualCost: product.Products_in_order.price,
                quantity: product.Products_in_order.quantity,
                totalCost: product.Products_in_order.price * product.Products_in_order.quantity
            }
        })
    }

}

module.exports = {
    getAllOrdersForUser(req, res){
        //Make sure there is an authed user
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        db.Order.findAll({where:{user_id: req.user.id},include:['Products']}).then(orders => {
            
            const response = orders.map(order => formatOrder(order));

            return res.status(200).json(response);

        }).catch(error => {
            return res.status(500).json({error: "Could not get all orders"});
        })
    },

    getAllOrders(req, res){
        //Make sure there is an authed user
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        db.Order.findAll({include:['Products']}).then(orders => {
            
            const response = orders.map(order => formatOrder(order));

            return res.status(200).json(response);

        }).catch(error => {
            return res.status(500).json({error: "Could not get all orders"});
        })
    },

    getOrderById(req, res){
        //Make sure there is an authed user
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        if(req.params.orderId === undefined) return res.status(400).json({error: "Missing information"});

        db.Order.findOne({where:{id: req.params.orderId}, include:['Products']}).then(order => {
            const response = formatOrder(order);

            return res.status(200).json(response);
        }).catch(error => {
            res.status(404).json({error: "Couldn't find order"});
        })
    },

    makeOrder(req, res){
        //Make sure there is an authed user
        if (req.user === undefined) return res.status(401).json({ error: "Authentication error" });

        //Get items in their cart
        db.User.findOne({where:{id:req.user.id}, include:['CartContents']}).then(user => {

            if(user.CartContents.length === 0) return res.status(400).json({error: "No products in cart"});

            //Construct array to easily twll if products are out of stock
            const stockArray = user.CartContents.map(cartItem => {
                return {
                    productId: cartItem.id,
                    name: cartItem.name,
                    storeStock: cartItem.quantity,
                    amountInCart: cartItem.Cart.quantity,
                    enoughStock: cartItem.Cart.quantity <= cartItem.quantity
                }
            });

            //Return error and send back array 
            if(!stockArray.every(({enoughStock}) => enoughStock)) return res.status(400).json({error: "Not all products in stock", stock: stockArray});

            //Create new order
            db.Order.create().then(order => {

                //Associate order to user
                user.addOrders(order).then(result => {
                    
                    //Iterate through cart
                    const productsInOrder = user.CartContents.map(product => {
                        
                        return Promise.all([
                            
                            //Add product to order
                            order.addProducts(product, {through: {quantity: product.Cart.quantity, price: product.price}}),

                            //Increase order total by product amount
                            order.increment('total', {by: product.price * product.Cart.quantity}),

                            //adjust stock level
                            product.decrement('quantity',{by: product.Cart.quantity}),

                            //Remove from cart
                            user.removeCartContents(product)

                        ]).then(([addOrderRes, orderTotalRes, stockLevRes, removeCartRes]) => {

                        }).catch(error => {
                            console.log(error);
                            res.status(500).json({error: "Error while processing order"});
                        })
                    });

                    Promise.all(productsInOrder).then(productArray => {

                        db.Order.findOne({where:{id:order.id}, include:['Products']}).then(completeOrder => {

                            const orderResponse = formatOrder(completeOrder);

                            return res.status(201).json({message:"Order placed successfully", order: orderResponse});
                        })

                    }).catch(error => {
                        return res.status(500).json({error: "Error while processing order"});
                    })
                    
                })
            })
        }).catch(error => {
            res.status(500).json({error: "Could not process order"});
        })
    }
}