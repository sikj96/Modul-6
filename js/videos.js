console.log('video koden er inde');
//elementer//
const video = document.getElementById('video');
const btnPlay = document.getElementById('btnPlay');
const btnStop = document.getElementById('btnStop');
const btnNext = document.getElementById('btnNext');
const slider = document.getElementById('slider')
const nuTid = document.getElementById('nuTid')
const slutTid = document.getElementById('slutTid')



//Events
btnPlay.addEventListener('click', start);
btnStop.addEventListener('click', stop);
btnNext.addEventListener('click', next)
slider.addEventListener('change', bar);
video.addEventListener('ended', end);
video.addEventListener('timeupdate', afspil);

//videoer//

const myVids = ["clean.mp4","Temperatur stigning.mp4","presicion.mp4","Nedkoeler.mp4", "90grader.mp4"];
for (let i = 0; i < myVids.length; i++) {
  console.log(myVids[i])
}
let vidsPlaying = 0;

//Funktioner

function start(){
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
  icon.classList.toggle("fa-pause")
  icon.classList.toggle("fa-play")
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function end() {
  next();
  start();
}

function next() {
  if(vidsPlaying < 4) {
    vidsPlaying++;
  } else {
    vidsPlaying = 0;
  }
  video.src = "video/" + myVids[vidsPlaying];
}

function bar() {
  let soe = video.duration * (slider.value / 100);
  video.currentTime = soe;
}

function afspil() {
  let ny = video.currentTime * (100 / video.duration);
  slider.value = ny;
  let nuMin = Math.floor(video.currentTime / 60);
  let nuSek = Math.floor(video.currentTime - nuMin * 60);
  let slutMin = Math.floor(video.duration / 60);
  let slutSek = Math.floor(video.duration - slutMin * 60);
  if(nuSek < 10){ nuSek = "0" + nuSek; }
  if(slutSek < 10){ slutSek = "0" + slutSek; }
  if(nuMin < 10){ nuMin = "0" + nuMin; }
  if(slutMin < 10){ slutMin = "0" + slutMin; }
  nuTid.innerHTML = nuMin+":"+nuSek;
  slutTid.innerHTML = slutMin+":"+slutSek;
}
