// const fs = require('fs');

var word = "", definition = "";

// var filename = 'list.json';

// function createFile(filename) {
//   fs.open(filename,'r',function(err, fd){
//     if (err) {
//       fs.writeFile(filename, '', function(err) {
//           if(err) {
//               console.log(err);
//           }
//           console.log("The file was saved!");
//       });
//     } else {
//       console.log("The file exists!");
//     }
//   });
// }


document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('status').textContent = "Extension loaded";

	var searchButton = document.getElementById('searchButton');
	var input = document.getElementById("textInput");
	var addButton = document.getElementById("addButton");

	//Enter key presses search button
	input.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("searchButton").click();
		}
	});

	//Search button
	searchButton.addEventListener('click', function() {	console.log("&");
		word = $('#textInput').val();
		if(!word){
			$('#status').html("Please enter a word");
			return;
		}
		apicall().then(display).catch(err);
	});

	//Add button
	addButton.addEventListener('click', function() {
		word = $('#textInput').val();	
		if(!word){
			$('#status').html("Please enter a word");
			return;
		}	
		apicall().then(store).catch(err);	
	});

});

function display (){
	$('#status').html(definition);
}
function err () {
	console.log("Error");
}

function store(){
	// chrome.storage.sync.set({word: definition}, function(){
	// 	console.log('Key: '+ word + '\nValue: '+ definition);
	// });

	$('#status').html('The word is added to the list');

	// dbPromise.then(function(db) {
	// 	var tx = db.transaction('store', 'readwrite');
	// 	var store = tx.objectStore('store');
	// 	var item = {
	// 		name: 'sandwich',
	// 		price: 4.99,
	// 		description: 'A very tasty sandwich',
	// 	};
	// 	store.add(item);
	// 	return tx.complete;
	// }).then(function() {
	// 	console.log('added item to the store os!');
	// });
	// chrome.storage.sync.get(['word'], function(result){
	// 	console.log("$$Value: "+result.word);
	// });

	// chrome.storage.sync.get(null, function(items){
	// 	console.log(items);
	// 	// var allKeys = Object.keys(items);
	// 	// console.log(allKeys);

	// 	for(var i = 0; i < localStorage.length; i++)
	// 	{
	// 		console.log(localStorage.key(i));
	// 	}
	// 	// for (key in items) {
	// 	// 	console.log("***KEY: " + key);
	// 	// 	console.log("***VAL: " + items.key);
	// 	// }
	// });

	// chrome.storage.sync.get(function(items) { console.log(items) });
}

