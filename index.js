

const cardanime = document.querySelector
(".card");
const backinverse = document.querySelector(".mid");
const bodyy = document.querySelector(".bodyy");

cardanime.addEventListener("mouseenter", () => {
    cardanime.style.background = "url(./téléchargerred.png)" ;
    bodyy.style.background = "url(./pexels-todd-trapani-2754201.jpg)";
    bodyy.style.background =  "align-items: center"
    bodyy.style.background = "justify-content: center"
    bodyy.style.background = "background-size: cover 50%"
    bodyy.style.background = "background-position: center"

   
  

});

cardanime.addEventListener("mouseout", () => {
    cardanime.style.background = "url(./télécharger.png)" ;
    bodyy.style.background = "url(./suhas-manjrekar-demon-world.jpg)";
    bodyy.style.background =  "align-items: center"
    bodyy.style.background = "justify-content: center"
    bodyy.style.background = "background-size: cover 50%"
    bodyy.style.background = "background-position: center"
    bodyy.style.background = "scale(0.5)"

   
  

});



