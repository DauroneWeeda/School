for(i=1; i<=30; i++){
	var but = document.createElement("button");
	but.id="buttons_"+i;
	but.innerHTML = " "+i;
	but.setAttribute("onclick", "check(this)('button_"+i+"')");
	document.getElementById("container").appendChild (but);
}

function check(element){
	element.style.backgroundColor = "red";
}