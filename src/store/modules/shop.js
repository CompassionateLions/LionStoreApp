//App logic in here

const fetch = require('node-fetch');

const state = {
    allProducts: [
        {
            "price": 24.45,
            "id": 503,
            "name": "The Shawshank Redemption",
            "image_url": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            "year": 1994,
            "quantity": 9,
            "isAvailable": true,
            "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "genre": "Drama",
            "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
            "director": "Frank Darabont",
            "format": "Blu-Ray",
            "rating": "R",
            "createdAt": "2020-06-03T20:54:40.000Z",
            "updatedAt": "2020-06-03T20:54:40.000Z"
        },
        {
            "price": 26.5,
            "id": 504,
            "name": "The Dark Knight",
            "image_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "year": 2008,
            "quantity": 1,
            "isAvailable": true,
            "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            "genre": "Action, Crime, Drama, Thriller",
            "actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "director": "Christopher Nolan",
            "format": "LaserDisc",
            "rating": "PG-13",
            "createdAt": "2020-06-03T20:54:40.000Z",
            "updatedAt": "2020-06-03T20:54:40.000Z"
        },
        {
            "price": 30.5,
            "id": 505,
            "name": "Inception",
            "image_url": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "year": 2010,
            "quantity": 5,
            "isAvailable": true,
            "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            "genre": "Action, Adventure, Sci-Fi, Thriller",
            "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            "director": "Christopher Nolan",
            "format": "4K Blu-Ray",
            "rating": "PG-13",
            "createdAt": "2020-06-03T20:54:40.000Z",
            "updatedAt": "2020-06-03T20:54:40.000Z"
        },
        {
            "price": 10.85,
            "id": 506,
            "name": "Fight Club",
            "image_url": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "year": 1999,
            "quantity": 14,
            "isAvailable": true,
            "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            "genre": "Drama",
            "actors": "Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier",
            "director": "David Fincher",
            "format": "DVD",
            "rating": "R",
            "createdAt": "2020-06-03T20:54:40.000Z",
            "updatedAt": "2020-06-03T20:54:40.000Z"
        },
        {
            "price": 42.15,
            "id": 507,
            "name": "Pulp Fiction",
            "image_url": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "year": 1994,
            "quantity": 6,
            "isAvailable": true,
            "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "genre": "Crime, Drama",
            "actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
            "director": "Quentin Tarantino",
            "format": "DVD",
            "rating": "R",
            "createdAt": "2020-06-03T20:54:40.000Z",
            "updatedAt": "2020-06-03T20:54:40.000Z"
        },
        {
            "price": 51.15,
            "id": 508,
            "name": "Forrest Gump",
            "image_url": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "year": 1994,
            "quantity": 17,
            "isAvailable": true,
            "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            "genre": "Drama, Romance",
            "actors": "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
            "director": "Robert Zemeckis",
            "format": "DVD",
            "rating": "PG-13",
            "createdAt": "2020-06-03T20:54:40.000Z",
            "updatedAt": "2020-06-03T20:54:40.000Z"
        }],
    allGenres: [],
    filteredProducts: [],
    user: {},

};

const getters = {
    allProducts: (state) => state.allProducts,

};

const actions = {
    queryApiAllProducts({ commit }) {

        return fetch('http://localhost:8080/api/products').then(response => {
            return response.json()
        }).then(json => {
            if (json.error) return //do some error handling

            commit('updateProducts', json);
        })
    }
};

const mutations = {
    updateProducts(state, products) {
        state.allProducts = products;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}