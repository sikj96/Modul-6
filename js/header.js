 //CilleStart
  const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () => {
    //Toggle nav
    nav.classList.toggle('nav-active');


    // Animation links
    navLinks.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger Animatione
    burger.classList.toggle('toggle');
  });
}

navSlide();
 //CilleSlut
 //SimonStart
let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 4000);

let text = ["LAD DET GRØNNE KØKKEN SIMRE IND"]

let slides = document.querySelectorAll(".slide");
for (var i = 0; i < slides.length; i++) {
let overlay = document.createElement("p")
overlay.innerHTML = text[0]
overlay.setAttribute("class","overlay-text")
slides[i].appendChild(overlay)

}

let pensum = 0
function count() {
pensum++
console.log(pensum)
}
//SimonSlut
