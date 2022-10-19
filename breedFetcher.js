const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
//request data from website including search parameter
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      //check if body is undefined, desc = null if so, otherwise desc is breed description
      const desc = JSON.parse(body)[0] === undefined ? null : JSON.parse(body)[0].description;
      //callback function with error and description
      callback(error,desc);
    }
  });
};

module.exports = { fetchBreedDescription };