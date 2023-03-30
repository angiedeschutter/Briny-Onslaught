let startButton =document.getElementById('start')
startButton.addEventListener('click', startGame)

let resetButton =document.getElementById('reset')
resetButton.addEventListener('click', function(){
    score = 0
    location.reload()
})

async function startGame(){
    gameTimer()
    gameOver(20000)
    startSwimmer()
    jellySwim()
    await pause(5000)
    jellySwim()

}

function pause(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

let scoreCount = []
let score=0
const para = document.createElement('p')
para.innerText=score
document.getElementById('scoreCount').appendChild(para)


let time = 20
const timer = document.getElementById('timer')
timer.innerText=time +'s'


async function gameTimer(){
    let startTimer=setInterval(timerDisplay,1000)
    function timerDisplay(){
      if (time>0){
          time=time-1
        const timer = document.getElementById('timer')
        timer.innerText=time +'s'
      } else{
        clearInterval(timerDisplay)
      }   
    }
}

let gameOverAudio=document.querySelector("#gameOverAudio")

async function gameOver(time){
    await pause(time)
    document.getElementById('start').disabled=true
    gameOverAudio.play()
    if(score === 400){
    const div = document.createElement('div')
    div.innerText="GAME OVER\nPrefect!"
    document.getElementById('backgroundDiv').appendChild(div)
    div.style.paddingLeft=294+'px';
    div.style.paddingRight= 294+'px';
    }
    else if(score > 50){
        const div = document.createElement('div')
        div.innerText="GAME OVER\nNice Job!"
        document.getElementById('backgroundDiv').appendChild(div)
        div.style.paddingLeft=294+'px';
        div.style.paddingRight= 294+'px';
        }
    else{
        const div = document.createElement('div')
        div.innerText="GAME OVER\nTry Harder Next Time"
         document.getElementById('backgroundDiv').appendChild(div)
         div.style.paddingLeft=220+'px';
         div.style.paddingRight= 220+'px';
    }    

}

