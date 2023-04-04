//This creates an eventlistener to start the game play when clicked
let startButton =document.getElementById('start')
startButton.addEventListener('click', startGame)

//When the game is over, this button will reload the page and clear the score and start button
let replaytButton =document.getElementById('replay')
replaytButton.addEventListener('click', function(){
    score = 0
    location.reload()
})

/*This function starts the game when the start button is clicked and disables the button
The game timer starts, and spawns the creatures and spawns more creatures after a given time
*/
async function startGame(){
    document.getElementById('start').disabled=true
    gameTimer()
    gameOver(20000)
    startSwimmer()
    jellySwim()
    octopusSwim()
    eelSwim()
    fish1Swim()
    fish2Swim()
    await wait(5000)
    jellySwim()
    eelSwim()
    fish1Swim()
    await wait(4000)
    octopusSwim()
    fish2Swim()
}


/*This creates an empty array that stores a points for each creature
then adds up the total and appends the new total to the browser 
*/
let scoreCount = []
let score=0
const para = document.getElementById('scoreCount')
para.innerText=score


//This set a timer for the game for 20s and sets it to 20s before the game starts
let time = 20
const timer = document.getElementById('timer')
timer.innerText=time +'s'

//This creates a a count down timer that displays the time left in the browser
async function gameTimer(){
    let startTimer=setInterval(timerDisplay,1000)
    function timerDisplay(){
      if (time>0){
          time=time-1
        const timer = document.getElementById('timer')
        timer.innerText=time +' s'
      } else{
        clearInterval(timerDisplay)
      }   
    }
}

let gameOverAudio=document.querySelector("#gameOverAudio")
/*After 20s the game is over after the given time, the gameOverAudio will play and a message
will appear based on the total score.
*/
async function gameOver(time){
    await wait(time)
    gameOverAudio.play()
    if(score === 2200){
    const div = document.createElement('div')
    div.innerText="GAME OVER\nPerfect!"
    document.getElementById('backgroundDiv').appendChild(div)
    div.style.paddingLeft=265+'px';
    div.style.paddingRight= 265+'px';
    }
    else if(score > 1200){
        const div = document.createElement('div')
        div.innerText="GAME OVER\nNice Job!"
        document.getElementById('backgroundDiv').appendChild(div)
        div.style.paddingLeft=261+'px';
        div.style.paddingRight= 261+'px';
        }
    else{
        const div = document.createElement('div')
        div.innerText="GAME OVER\nTry Harder Next Time"
         document.getElementById('backgroundDiv').appendChild(div)
         div.style.paddingLeft=113+'px';
         div.style.paddingRight= 110+'px';
    }    

}

/*When the creature is clicked, a sound effect will sound, the image is removed from the browse
add the given score the scoreCount array, then the array is totalized and updates the score display in tje browser 
*/
let killAudio=document.querySelector("#audioDeath")
function clickKill(creature, points){
  function kill(){
      creature.remove()
      killAudio.play()
      scoreCount.push(points)
      score=0
      scoreCount.forEach(value =>{
          score+=value
      })
      let totalScore=score
      para.innerText=totalScore
  }
  creature.addEventListener('click', kill)
}