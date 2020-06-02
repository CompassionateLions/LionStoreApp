const db = require("../models");

module.exports = () => {
    return Promise.all([
        db.Product.create({
            name: "That Obscure Object of Desire",
            image_url: "https://m.media-amazon.com/images/M/MV5BNzY5NDZjNTEtMTVlZC00MzkxLTllNjQtZmQ5ODE3ZWQxNGM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
            price: 1000,
            year: 1977,
            quantity: 10,
            description: "Recounted in flashback are the romantic perils of Mathieu, a middle-aged French sophisticate as he falls for his nineteen year-old former chambermaid Conchita.",
            genre: "Comedy, Drama",
            actors: "Fernando Rey, Carole Bouquet, Ángela Molina, Julien Bertheau",
            director: "Luis Buñuel",
            rating: "R",
            format: "DVD"
        }),
        db.Product.create({
            name: "The Umbrellas of Cherbourg",
            image_url: "https://m.media-amazon.com/images/M/MV5BMWRkNWE1ZTMtY2ZhYy00NDFjLWI3ODktNDM4ZDIwOTMzNDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            price: 2000,
            year: 1964,
            quantity: 2,
            description: "A young woman separated from her lover by war faces a life-altering decision.",
            genre: "Drama, Musical, Romance",
            actors: "Catherine Deneuve, Nino Castelnuovo, Anne Vernon, Marc Michel",
            director: "Jacques Demy",
            rating: "PG",
            format: "Blu-Ray"
        }),
        db.User.create({
            email: "ben@fawcett.xyz",
            password: "$2b$10$E/8y9e.lVN/l1Wb6yFcohOXYi4aj5RhUTJNrzehA88hxLrJ.4E7kq",
            role: "admin"
        }),
        db.Order.create()
    ])
        .then(([product1, product2, user, order]) => {
            return Promise.all([
                user.setOrders(order),
                order.setProducts([product1, product2]),
                user.addCartContents([ product2])
                // user.setCartContents(product2, {through: {quantity: 4}})
            ])
        }).then(([res1, res2, res3, res4]) => {

            // console.log(res3);
            // console.log(res3[0][0].dataValues);

            return db.User.findOne({where:{id:1}, include: ['CartContents']});
            // return db.Order.findAll({ where: { id: 1 }, include: ['Products'] });
        }).then(res => {
            // console.log(res.dataValues.CartContents[0].Cart);
        })
}