// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

function orderList(node, filesArray) {
    var i = 0,
	content = "";
	
    for(i = 0; i < filesArray.length; i++) {
         content += "<li>" + filesArray[i] + "</li>"; 
        }
        node.innerHTML += "<ol>" + content + "</ol>"; 
}

function unorderedList(node, filesArray) {
	var i = 0;
	var j = 0,
	content = "";

	for(i = 0; i < filesArray.length; i++){
		content += "<li>" + filesArray[i].name + "</li>"
		if(filesArray[i].type == "directory") {
			content1 = "";
			for(j = 0; j< filesArray[i].files.length; j++){
				content1 += "<li>" + filesArray[i].files[j].name + "</li>"
			}
			content += "<ul>" + content1 + "</ul>"
		} 
	}
	node.innerHTML += "<ul>" + content + "</ul>"
}

function outPut() {
	var fruitsList = document.getElementById("fruits");
	var filesList = document.getElementById("files");
	orderList(fruitsList, fruits);
	unorderedList(filesList, directory);
}

window.onload = function() {
	outPut();
}