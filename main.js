//Value de base 0, donc 0 à cahque nouvelle fonctions 
let input = "";

//Récupère les boutons
let bouton = document.getElementsByTagName("button");

//récupère le screen
let resultat = document.getElementsByClassName("screen");

//Variable Clear
let clear = document.getElementById("clear");
clear.addEventListener("click",reset);//Déclare la fonction reset 

let back = document.getElementById("return");
back.addEventListener("click", remove);//Déclare la fonction remove

let egal = document.getElementById("egal");
egal.addEventListener("click", math); //Déclare la fonction math

function math() 
    {
        //Eval Fait le calcul grâce aux values 
        input = eval(input);

        //Toujours InnerHTML ou text.Content pour afficher 
        document.getElementById("screen").innerHTML = input;
    
    }

function remove()
    {
        //slice = coupe le dernier élément et le remplace par rien avec replace
        input=input.replace(input.slice(-1),"");
        document.getElementById("screen").innerHTML = input;
    }
function reset()
    {
        document.getElementById("screen").innerHTML = "0";
        input="";
    }

function affiche() 
    {   
        //input = ce bouton
        input = input + this.value;

        //récupère l'HTML
        document.getElementById("screen").innerHTML = input;

    }


for (let i=0; i<bouton.length; i++)
{
    bouton[i].addEventListener("click", affiche);
    
}


