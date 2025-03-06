
function calcul()
{
	var AB=parseFloat(document.getElementById('v1').value);
	var AC=parseFloat(document.getElementById('v2').value);
	var BC= Math.sqrt(AB*AB+AC*AC);
	document.getElementById('reponse').innerHTML="l'hypotenuse vaut "+ BC;
}
var change = 1
function changer()
{

document.getElementById('image').src='vegeta_win.png';
change+=1

if (change==3)
{
change+=1
document.getElementById('image').src='vegeta.png';
}

if (change==5)
{change+=1
document.getElementById('image').src='goku.png';
}

if (change==7)
{change-=6
document.getElementById('image').src='goku_win.png';
}
}

var nb_jeu = parseInt(Math.random()*100)+1
function jeu()
{
var nb_choisit=parseInt(document.getElementById('v3').value);

if (nb_choisit==nb_jeu)
{
document.getElementById('reponse2').innerHTML="BRAVO TA GAGNER <br/> tu veux rejouer ?";
}
else if (nb_choisit>nb_jeu)
{
document.getElementById('reponse2').innerHTML+="ah non ton "+nb_choisit+" est trop grand, choisit encore<br/>";
}
else 
{
document.getElementById('reponse2').innerHTML+="ah non "+nb_choisit+" est trop petit, choisit encore<br/>";
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
	droit="aucune des angles car ce n'est pas rectangle";
	}
	document.getElementById('reponse3').innerHTML="le triangle est rectangle en "+droit;
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
	document.getElementById('reponse4').innerHTML = "la lettre e reviens " + e +" fois dans le texte ";
}





