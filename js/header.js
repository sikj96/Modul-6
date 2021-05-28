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

//Freja start//
const shareknap = document.getElementById('shareknap') //definere shareknap + henter nævnte Id fra HTML//
const exit = document.getElementById('exit') //definere exit + henter nævnte Id fra HTML//

shareknap.addEventListener('click', function(){ //event listner aktiveres ved click på shareknap//
  document.getElementsByClassName('delpa')[0].classList.add('active'); //function går ind og henter class name "share pop up box", og aktiveres når den klikkes på, [0]=array//
})

exit.addEventListener("click", function(){ //event listner aktiveres igen ved click på exit knap//
  document.getElementById('delpa').classList.remove('active'); //function går ind og henter Id, og fjerner "share pop up box"//
})

function myFunction() { //aktiverer myFunction fra HTML//
  let copyText = document.getElementById("myInput"); //definere copyText + henter nævnte Id fra HTML//
  copyText.select();//responsive til mobil//
  copyText.setSelectionRange(0, 99999) //responsive til mobil//
  alert("Kopier texten her: " + copyText.value); //alert skriver text + henter copyText.value (myInput.value) fra HTML//
}

let yes = document.getElementById('yes'); //definere yes + henter nævnte Id fra HTML//
let no = document.getElementById('no'); //definere no + henter nævnte Id fra HTML//

document.getElementById('container').addEventListener('click', function(evt) { //henter nævnte Id, og event listner + function aktiveres ved click//
//  let target = evt.target; //definere target som function(obj) + target//
  if (evt.target.id === "yes") { //target Id er yes, (=== equal value + equal type)//
    yes.style.backgroundColor = 'green'; //yes bliver grøn når funktion aktiveres//
  } else if (evt.target.id === 'no') {
    no.style.backgroundColor = 'red'; //no bliver rød når funktion aktiveres//
  } else { //hvis andet (container) bliver aktiveret//
    yes.style.backgroundColor = '#cccccc'; //yes knaps baggrunds farve, hvis andet bliver klikket//
    no.style.backgroundColor = '#cccccc'; //no knaps baggrunds farve, hvis andet bliver klikket//
  }});

let links = document.getElementsByTagName("a"); //definere links + henter nævnte tag name//
  for ( i = 1; i <= links.length; i++) { //index varible; condition (tæller links og giver et tal); incrementer//
    console.log("This is link number" + i); //text + i skrives på inspect//
}
//Freja slut//
