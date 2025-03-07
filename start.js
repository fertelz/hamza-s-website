function calcul()
{
	var AB=parseFloat(document.getElementById('v1').value);
	var AC=parseFloat(document.getElementById('v2').value);
	var BC= Math.sqrt(AB*AB+AC*AC);
	document.getElementById('reponse').innerHTML="the hypotenuse is equal to :"+ BC;
}


var nb_jeu = parseInt(Math.random()*100)+1
function jeu()
{
var nb_choisit=parseInt(document.getElementById('v3').value);

if (nb_choisit==nb_jeu)
{
document.getElementById('reponse2').innerHTML="WELL DONE !! <br/> wanna try again  ?";
}
else if (nb_choisit>nb_jeu)
{
document.getElementById('reponse2').innerHTML+="nope nice try, "+nb_choisit+" is too big. try again<br/>";
}
else 
{
document.getElementById('reponse2').innerHTML+="nope nice try, "+nb_choisit+" is too small. try again<br/>";
}
}
function restart()
{
document.getElementById('reponse2').innerHTML=" ";
nb_jeu = parseInt(Math.random()*100)+1
}

function  angle()
{
	var AB=parseFloat(document.getElementById('v4').value);
	var AC=parseFloat(document.getElementById('v5').value);
	var BC=parseFloat(document.getElementById('v6').value);
	var droit;
	if (BC*BC== AB*AB+AC*AC)
	{
	droit="B";
	}
	else if (AC*AC== AB*AB+BC*BC)
	{
	droit="A";
	}
	else if (AB*AB== AC*AC+BC*BC)
	{
	droit="C";
	}
	else
	{
	droit="none of the angles because the triangle is not right";
	}
	document.getElementById('reponse3').innerHTML="the triangle is right in "+droit;
}
function count() 
{
	e = 0;
	var texte = document.getElementById('v7').value;
	for (let i = 0; i < texte.length; i+= 1)
	{
	if (texte[i] == 'e' || texte[i] == 'E')
	{
	e +=1;
	}
	
	}
	document.getElementById('reponse4').innerHTML = "la letter e is present " + e +" times in your text ";
}
 function checkAnswers() 
        
		{
		var score = 0
        
        if (document.getElementById('q1a').checked) {
            score+= 1;
        }
        

        
        if (document.getElementById('q2a').checked) {
            score+= 1;
        }

		if (document.getElementById('q3b').checked) {
            score+= 1;
        }
		
		if (document.getElementById('q4c').checked) {
            score+= 1;
        }

        document.getElementById('response5').textContent	= "Your score: " + score + "/4";
    }



