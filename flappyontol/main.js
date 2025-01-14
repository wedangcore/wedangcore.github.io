const pipes = document.querySelectorAll('.pipes')
const bird = document.querySelector('.bird')
const jump = document.querySelector('.jump')
const toppipe = document.querySelector('.top-pipes')
const botpipe = document.querySelector('.bottom-pipes')
const toppipe2 = document.querySelector('.top-pipes2')
const botpipe2 = document.querySelector('.bottom-pipes2')
const scoreDis = document.querySelector('.score')
const audio = document.getElementById("myAudio");
const audio2 = document.getElementById("myAudio2");
let score = 0;
let interval;

function startIncrementing() {
  interval = setInterval(()=>{
     score++
     scoreDis.textContent = `Score: ${score}`;
   },510)
};
setTimeout(() => {
  startIncrementing()
}, 1500)
function startPoin(){
  setTimeout(()=>{
  startIncrementing()
},1500)
}
function stopIncrementing() {
  clearInterval(interval);
  interval = null;
  score = 0
  scoreDis.textContent = `Score: ${score}`;

}
for (i = 0; i < pipes.length; i++) {

  let rand = Math.floor(
    (Math.random() * 5 + 4) * 22
  )
  pipes[i].style.height = rand + 'px'

}
let intervalId
startInterval()

function startInterval() {
  intervalId = setInterval(() => {
    const pipes2 = document.querySelectorAll('.pipes')


    const newDiv = document.createElement('div');
    const newDiv2 = document.createElement('div');

    newDiv.classList.add('pipes');
    newDiv2.classList.add('pipes');

    let rand = Math.floor(
      (Math.random() * 5 + 4) * 22
    )
    let rand2 = Math.floor(
      (Math.random() * 5 + 4) * 22
    )


    newDiv.style.height = rand + 'px'
    newDiv2.style.height = rand2 + 'px'

    toppipe.appendChild(newDiv)
    botpipe.appendChild(newDiv2)

    for (z = 0; z < 9; z++) {
      toppipe.removeChild(pipes2[z])
      botpipe.removeChild(pipes2[z + 5])
      break
    }
    
  }, 5000);
}

function resetInterval() {
  if (intervalId) {
    clearInterval(intervalId);
    
    
  }
  if (interval){
    clearInterval(interval);
  }
  stopIncrementing()
 // startInterval()
  //startIncrementing()
  startPoin()
}
function jumped(){
  bird.style.top ='-600px'
  audio.currentTime = 0; 
  audio.play();
  setTimeout(()=>{
    bird.style.top ='425px'
  },100)
}

setInterval(() => {
  detectCollisions()
}, 1)

function checkCollision(elementA, elementB) {

  const rectA = elementA.getBoundingClientRect();
  const rectB = elementB.getBoundingClientRect();

  return (
    rectA.left < rectB.right &&
    rectA.right > rectB.left &&
    rectA.top < rectB.bottom &&
    rectA.bottom > rectB.top
  );
}

function detectCollisions() {
  const pipes3 = document.querySelectorAll('.pipes')

  pipes3.forEach((pipe, index) => {
    if (checkCollision(bird, pipe))
    {
      audio2.currentTime = 0; // Start from the beginning
      audio2.play();
      alert('DUARR, dapat : ' + score + ' poin')
    
      bird.style.top = '250px'
      bird.style.left = '30px'
    
      toppipe.style.animation = 'none';
      toppipe.style.right = '-300px';
      toppipe2.style.animation = 'none';
      toppipe2.style.right = '-450px';
      botpipe.style.animation = 'none';
      botpipe.style.right = '-300px';
      botpipe2.style.animation = 'none';
      botpipe2.style.right = '-450px';
      setTimeout(() => {
        for (l = 0; l < pipes3.length; l++) {
          let nrand = Math.floor(
            (Math.random() * 5 + 4) * 22
          )
          pipes[l].style.height = nrand + 'px'
    
    
        }
        bird.style.transition = 'top 2s ease'
    
        toppipe.style.animation = 'slide-left 5s linear infinite';
        toppipe2.style.animation = 'slide-left2 5s linear infinite';
        toppipe2.style.animationDelay = '2.5s';
    
        botpipe.style.animation = 'slide-left 5s linear infinite';
        botpipe2.style.animation = 'slide-left2 5s linear infinite';
        botpipe2.style.animationDelay = '2.5s';
        resetInterval()
    
      }, 10);
    
    
    }
  })
}


