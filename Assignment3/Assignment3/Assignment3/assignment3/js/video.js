// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

function playVideo(node, vidSrc) {
    var i = 0;
    var content = "";
    var ctrl;
    for(i = 0; i < vidSrc.source.length; i++) {
        content += "<source src='" + vidSrc.source[i].src 
        + "'" + "type='" + vidSrc.source[i].type + "'>"
    }
    if (vidSrc.controls) {
    	ctrl = " controls";
    } else {
    	ctrl = "";
    }

    content = "<video" + ctrl + " width='" + vidSrc.width 
    + "' height='" + vidSrc.height +"'>" + content +"</video>";
    node.innerHTML = content;
}

function outPut() {
	var vidContainer = document.getElementById("video");
	playVideo(vidContainer, video);
}

window.onload = function() {
	outPut();
}