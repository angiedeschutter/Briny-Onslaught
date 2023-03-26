let startButton =document.getElementById('start')
startButton.addEventListener('click', startGame)

let resetButton =document.getElementById('reset')
resetButton.addEventListener('click', function(){
    score = 0
    location.reload()
})

async function startGame(){
    startSwimmer()
    jellySwim()
    await pause(5000)
    startSwimmer()
    
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

console.log(scoreCount)



