let startButton =document.getElementById('start')
startButton.addEventListener('click', startGame)

let resetButton =document.getElementById('reset')
resetButton.addEventListener('click', function(){
    score = 0
    location.reload()
})




async function startGame(){
    gameTimer()
    startSwimmer()
    jellySwim()
    await pause(5000)
    startSwimmer()
    jellySwim()   
    gameOver() 
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


let time = 5
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

function gameOver(){
    if(time===0 && score === 400){
    const div = document.createElement('div')
    div.innerText="GAME OVER\nPrefect!"
    document.getElementById('backgroundDiv').appendChild(div)
    }
    else if(time===0 && score > 100){
        const div = document.createElement('div')
        div.innerText="GAME OVER\nNice Job!"
        document.getElementById('backgroundDiv').appendChild(div)
        }
    else{
        const div = document.createElement('div')
        div.innerText="GAME OVER\nTry Harder Next Time"
         document.getElementById('backgroundDiv').appendChild(div)
         console.log(score)
    }    

}

