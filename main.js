function affiche() 
    {   
        resultat.textContent = this.bouton;
    }

let bouton = document.getElementsByTagName("button");
let resultat = document.getElementsByClassName("screen");

for (let i=0; i<bouton.length; i++)
{
    bouton[i].addEventListener("click", affiche);
    
}


