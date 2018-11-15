// Kazim Akhlaqi
// 103638177


// set a global httpRequest object

var httpRequest;

// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = function (){
	makeRequest(1);
}

function makeRequest(pageNum){

	// TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...

	var url = ["https://reqres.in/api/users?page=1",
		"https://reqres.in/api/users?page=2",
		"https://reqres.in/api/users?page=3",
		"https://reqres.in/api/users?page=4"
	];

	if (pageNum === 1)
		url = "https://reqres.in/api/users?page=1";
	else if (pageNum === 2)
		url = "https://reqres.in/api/users?page=2";
	else if (pageNum === 3)
		url = "https://reqres.in/api/users?page=3";
	else if (pageNum === 4)
		url = "https://reqres.in/api/users?page=4";

	// make an HTTP request object

	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired

	httpRequest.onreadystatechange = showContents;

	// open a asynchronous HTTP (GET) request with the specified url

	httpRequest.open('GET', url, true);

	// send the request

	httpRequest.send();
}

// the function that handles the server response

function showContents(){

	//  check for response state
	//  0      The request is not initialized
	//  2      The request has been sent
	//  3      The request is in process
	//  4      The request is complete

	if (httpRequest.readyState === 4){
		// check the response code
		if (httpRequest.status === 200){ // The request has succeeded
			// Just for debugging. 
			console.log(httpRequest.responseText);

			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);

			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var tablebody = document.getElementById("data")
			tablebody.innerHTML = "";

			for (var i = 0; i < jsData.data.length; i++){

				var tableRow = document.createElement("tr");

				var tableDataId = document.createElement("td");
				var id = document.createTextNode(jsData.data[i].id);
				tableDataId.appendChild(id);
				tableRow.appendChild(tableDataId);

				var tableDataFirstName = document.createElement("td");
				var firstName = document.createTextNode(jsData.data[i].first_name);
				tableDataFirstName.appendChild(firstName);
				tableRow.appendChild(tableDataFirstName);

				var tableDataLastName = document.createElement("td");
				var lastName = document.createTextNode(jsData.data[i].last_name);
				tableDataLastName.appendChild(lastName);
				tableRow.appendChild(tableDataLastName);

				var tableImage = document.createElement("td");
				var image = document.createElement("img");
				tableImage.appendChild(image);
				tableRow.appendChild(tableImage);

				image.setAttribute("src", jsData.data[i].avatar);
				image.setAttribute("alt", "Avatar");

				document.getElementById("data").appendChild(tableRow);
			}

		} else {
			console.log('There was a problem with the request.');
		}
	}
}