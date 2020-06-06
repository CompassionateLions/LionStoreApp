const fetch = require("node-fetch");
const fs = require("fs");

const movieIds = require("./imdb_ids");


const apiKey = "80d347c7";


const testIds = ["tt0111161", "tt0468569", "tt1375666", "tt0137523"];

const format = ["DVD", "DVD", "DVD", "DVD", "DVD", "DVD", "DVD", "Blu-Ray", "Blu-Ray", "Blu-Ray", "Blu-Ray", "Blu-Ray", "VHS", "16mm", "HD-DVD", "LaserDisc", "Betamax", "4K Blu-Ray", "4K Blu-Ray", "4K Blu-Ray"];


const seeds = require("./moveiSeeds");

console.log(seeds[164],seeds[165], seeds[166]);


// const results = movieIds.map(id => {
//     return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`).then(result => {
//         return result.json()
//     }).then(json => {
        

//         return {
//             name:json.Title,
//             year: json.Year,
//             format : format[Math.floor(Math.random() * format.length)],
//             description: json.Plot,
//             rating: json.Rated,
//             genre: json.Genre,
//             director: json.Director,
//             actors: json.Actors,
//             image_url: json.Poster,
//             price: Math.round((((Math.random() * 50) + 3) * 100)/5)*5/100,
//             quantity: Math.ceil(Math.random()*20)
//         }
//     })
// });

// Promise.all(results).then(resArray => {
//     console.log(resArray);

//     const fileString = "module.exports = " + JSON.stringify(resArray);

//     fs.writeFile("./moveiSeeds.js", fileString, "utf-8", (err) => {
//         if(err) return console.log(error);
//     });
// })