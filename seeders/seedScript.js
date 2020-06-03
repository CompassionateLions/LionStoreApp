const fetch = require("node-fetch");
const fs = require("fs");

const movieIds = require("./imdb_ids");


const apiKey = "80d347c7";


const testIds = ["tt0111161", "tt0468569", "tt1375666", "tt0137523"];

const results = testIds.map(id => {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`).then(result => {
        return result.json()
    }).then(json => {
        

        return json
    })
});

Promise.all(results).then(resArray => {
    console.log(resArray);
})