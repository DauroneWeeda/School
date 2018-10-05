var sword = "no";

var antwoord = prompt ("will you go left or right?"); 

if (antwoord == "left"){
	alert("you encounter a dragon!!");  
	var antwoord = prompt ("Run or try to fight");
	if (antwoord == "fight"){
		//Run or fight.
		if(sword == "no"){
			alert ("The dragen eats you. You're dead!");

			var antwoord = prompt ("do you want to continue?");

			if (antwoord == "yes"){

				}
		else{
			alert("game over");

			
		}
		var antwoord = prompt ("you were revived now choose will you go left or right?");
		alert("You'll find a sword to kill the dragon.");

		//Run or fight.
		if(sword == "no");
		}
		else{
			alert("You've killed the Dragon")
		}
	}
	else{
		alert("You run back to a save place");	
		} 
		var antwoord = prompt ("will you go left or right?");
		alert("You'll find a sword to kill the dragon.");
	}


else { // als de eerste keuze rechts is
	sword = "yes";
	alert("You'll find a sword to kill the dragon.");
	alert("you encounter a dragon!!");  
	var antwoord = prompt ("Run or try to fight");
	if (antwoord == "fight"){
		//Run or fight.
		if(sword == "no"){
			alert ("The dragen eats you. You're dead!");
		}
		else{
			alert("You've killed the Dragon")
		}
	}
	else{
		alert("You run back to a save place");	
		alert("You'll find a sword to kill the dragon.");
	}
	
}

var antwoord = prompt ("The dragon is dead will you continue this path?"); 

var age =	Number(prompt("how old are you?"));
			alert("You found a small tresure!!");
if (age <=20 )
	{
	

	age= true;

	}
	else{
		alert("you found a big tresure");	
	}

	



