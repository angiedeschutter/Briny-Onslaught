let startButton =document.getElementById('start')
startButton.addEventListener('click', startGame)

let replaytButton =document.getElementById('replay')
replaytButton.addEventListener('click', function(){
    score = 0
    location.reload()
})



async function startGame(){
    document.getElementById('start').disabled=true
    gameTimer()
    gameOver(200)
    startSwimmer()
    jellySwim()
    octopusSwim()
    eelSwim()
    fish1Swim()
    await pause(5000)
    jellySwim()
    await pause(5000)
    octopusSwim()
    eelSwim()
    fish1Swim()
    await pause(1000)
    jellySwim()

}

function pause(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

let scoreCount = []
let score=0
const para = document.getElementById('scoreCount')
para.innerText=score



let time = 20
const timer = document.getElementById('timer')
timer.innerText=time +'s'


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

async function gameOver(time){
    await pause(time)
    gameOverAudio.play()
    if(score === 1800){
    const div = document.createElement('div')
    div.innerText="GAME OVER\nPrefect!"
    document.getElementById('backgroundDiv').appendChild(div)
    div.style.paddingLeft=265+'px';
    div.style.paddingRight= 265+'px';
    }
    else if(score > 700){
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

