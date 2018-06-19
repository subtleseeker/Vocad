const app_id = '89afc965';
const app_key = '395acac8162b317b9d6f3c6cd0b3930b';
const language = "en";
var word_id = 'oblivion';
var url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word_id.toLowerCase();

var request = new XMLHttpRequest();

// request.withCredentials = true;
// request.addEventListener("readystatechange", function() {
// 	if(this.readyState === this.DONE) {
// 		jsonText = JSON.parse(request.responseText);
// 		definition = jsonText.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[0].definitions[0];
// 		console.log(definition);
// 	}
// });
console.log(url);
request.open('GET', url, true);
request.setRequestHeader('accept', "application/json");
request.setRequestHeader('app_id', app_id); 
request.setRequestHeader('app_key', app_key);
// request.setRequestHeader('Access-Control-Allow-Origin', '*');
// request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
// request.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

// request.onload = function() {
// 	//Begin accessing JSON data here

// 	var data = JSON.parse(this.response);
// 	var definition = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
// 	console.log(data);
// 	console.log(definition);
// 	// if(request.status >= 200 && request.status < 400){
// 	// 	// data.forEach(movie => {


// 	// 	// });	
// 	// }
// 	// else{
// 	// 	console.log("error");
// 	// }
// }

request.send();

