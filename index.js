let startButton =document.getElementById('start')
startButton.addEventListener('click', startGame)

let resetButton =document.getElementById('reset')
resetButton.addEventListener('click', function(){
    score = 0
    location.reload()
})

