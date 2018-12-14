

for(i=1; i<=3; i++){
	var but = document.createElement("button");
	but.id="button_"+i;
	but.innerHTML = "button "+i;
	but.setAttribute("onclick", "change('button_"+i+"')");
	document.getElementById("container").appendChild (but);
}

function change(but){
	if(but =="button_1"){
	document.body.style.backgroundColor = ("green");
	}
	else if (but == "button_2"){
	document.body.style.backgroundColor = ("yellow");
	}
	else if (but == "button_3"){
	document.body.style.backgroundColor = ("blue");
	}
}