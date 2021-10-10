var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '2e47a54e48msh4b039b0f5e8bb3ap1c4bddjsn1a7e415ab166'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});