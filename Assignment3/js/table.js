// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

function userTable(table, usrArray){
	var i = 0,
		content = "";
    var thead = "<tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Email</th></tr>";
	content += thead;
	for(i = 0; i < usrArray.length; i++){
        content += "<tr><td>" + usrArray[i].first_name
        + "</td><td>" + usrArray[i].last_name + "</td><td>" 
        + usrArray[i].age + "</td><td>" + "<a href='mailto:" 
        + usrArray[i].email + "'>" 
        + usrArray[i].email + "</a>" + "</td></tr>";
	}
	table.innerHTML += content;
}

function outPut() {
	var table = document.getElementById("userTable");
	userTable(table, users);
}

window.onload = function() {
	outPut();
}