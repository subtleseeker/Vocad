function apicall(){
	return new Promise(
		function (resolve, reject) {
			var url = 'http://api.pearson.com/v2/dictionaries/lasde/entries?headword=' + word;
			var request = new XMLHttpRequest();		

			request.onload = function() {
				//Begin accessing JSON data here
				var data = JSON.parse(this.response);		//console.log(data);

				if(data.results[0] == null){
					definition = "Word not found!";
				}
				else {
					definition = data.results[0].senses[0].definition;
				}

				// if(definition.length != 0)
				//  	definition = definition.charAt(0).toUpperCase() + definition.slice(1);
				console.log('definition='+definition);

				if(definition != ""){
					resolve(definition);
				}
				else
					reject(new Error('empty_definition'));
			}

			request.open('GET', url, true);
			request.setRequestHeader('accept', "application/json");
			request.send();	
		})
}