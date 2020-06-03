'use strict';

const db = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.User.findAll({ where: {} }).then(users => {
      const userPromiseArr = users.map(user => {



        const orderPromiseArr = []

        for (let i = 0; i <= Math.floor(Math.random() * 4) + 1; i++) {

          orderPromiseArr.push(db.Order.create().then(order => {

            return user.addOrders(order).then(_ => {

              return db.Product.findAll({
                where: {},
                limit: Math.floor((Math.random() * 5) + 1),
                order: db.sequelize.random()
              }).then(products => {

                const prodPromiseArr = products.map(product => {



                  const quantity = Math.floor(Math.random() * 5) + 1
                  return Promise.all([order.addProducts(product, {
                    through: {
                      quantity: quantity,
                      price: product.price
                    }
                  }),
                  order.increment('total', { by: (product.price * quantity) * 100 })
                  ]);

                })

                return Promise.all(prodPromiseArr);

              })

            })


          })
          )
        }

        return Promise.all(orderPromiseArr);


      });

      return Promise.all(userPromiseArr);

    })
  },

  down: (queryInterface, Sequelize) => {
    return db.Order.destroy({ where: {} })

  }
};
