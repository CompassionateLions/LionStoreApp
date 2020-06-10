# Lion Movie Store

![Logo](misc/logo.png)

## [Visit The Site!](https://lion-movie-store.herokuapp.com/)

## Description

The Lion Movie Store is an e-commerce single page application where users can browse movies for sale. The app has functionallity for signup and login. Products can be filtered using various parameters. Users are able to add items to their cart and place an order when they're ready

## Technologies

* **Vue.js** - The front end of the application is built using Vue.js. We are also using the companion libraries **Vue-router** to handle different pages, **VueX** for state management and **vuex-persistedstate** to store the state to local storage
* **Materialize CSS** - The app was styled mainly using components from the Materialize CSS library. Additionally the **NoUISlider** library was used for the sliders in the filters
* **MySQL** - The backend database for this application utilises MySQL which is accessed through the ORM **sequelize**
* **JSON Web Tokens** - The authentication for this app is provided to the user in the form of a JSON Web Token. This allows the application to be stateless.

* **Node.js** - The server language for this application uses Node.js.

* **Express** - Express provides the functionality to handle our backend API Routes

## [API](routes/README.md)

Every action of this application can be processed with an API request. This allows future development very easy. For instance it would be possible to design a moblie application that has the same functionality as the website using only the API routes.

The API has been extensively documented [here](routes/README.md)

## Authors

* ### [Ben Fawcett](https://github.com/hexagonatron)
* ### [Ruma Das](https://github.com/RumaRDas)
* ### [Ziyen Loh](https://github.com/zyloh89)
* ### [Karthik Kovi](https://github.com/karthikkovi)

## [License](LICENSE.md)

This project is provided under the MIT license.
