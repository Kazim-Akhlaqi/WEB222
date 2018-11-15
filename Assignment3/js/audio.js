// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

function playAudio(node, audSrc) {
    var i = 0;
    var content = "";
    var ctrl;
    for(i = 0; i < audSrc.source.length; i++) {
        content += "<source src='" + audSrc.source[i].src 
        + "'" + "type='" + audSrc.source[i].type + "'>"
    }
    if (audSrc.controls) {
    	ctrl = " controls";
    } else {
    	ctrl = "";
    }

    content = "<audio" + ctrl + ">" + content +"</audio>";
    node.innerHTML = content;
}

function outPut() {
	var audContainer = document.getElementById("audio");
	playAudio(audContainer, audio);
}

window.onload = function() {
	outPut();
}