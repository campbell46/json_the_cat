const { fetchBreedDescription } = require("./breedFetcher");

//get the user input from terminal(breed to search)
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (breedName === undefined) {
    console.log("No breed name provided.");
    return false;
  } else if (error) {
    console.log("Error fetch details: ", error);
  //if description is null log not found
  } else if (desc === null) {
    console.log('Breed name not found.');
  //if all is good log description
  } else {
    console.log(desc);
  }
});