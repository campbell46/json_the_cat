const request = require("request");
//get the user input from terminal(breed to search)
const userInput = process.argv.slice(2);
//set the breed to a variable
const breed = userInput[0];

//request data from website including search parameter
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(err, response, body) {
  const data = JSON.parse(body);

  //console log error if any
  if (err) {
    console.log("Error :", err);
    return;
  }
  
  //console.log(no breed found || breed info)
  if (data.length === 0) {
    console.log("Sorry the breed you are looking for is not found.");
  } else {
    console.log(data[0].description);
  }
});