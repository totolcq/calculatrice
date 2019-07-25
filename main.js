function affiche() 
    {   
        document.getElementsByTagName("button") ;
    }

let bouton = document.getElementsByTagName("button");


for (let i=0; i<bouton.length; i++)
{
    bouton[i].addEventListener("click", affiche);
}


