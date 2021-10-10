fetch("https://api-football-v1.p.rapidapi.com/v3/timezone", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "2e47a54e48msh4b039b0f5e8bb3ap1c4bddjsn1a7e415ab166"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});