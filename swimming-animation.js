    //Swimmer Title Intro
    let swimNo = document.getElementById('swimAnime')
    swimNo.style.top = 40+'px'
    swimNo.style.left =400+'px'
    swimNo.style.height = 40+'px'

function appendSwimmer(location){
    document.getElementById('swimAnime').src=location
}

let location1='./assets/Swim1.png'
let location2='./assets/Swimmer2.png'
let location3='./assets/Swimmer3.png'
let location4='./assets/Swimmer4.png'
let location5='./assets/Swimmer5.png'
let location6='./assets/Swimmer6.png'

function pause(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function swimmerAnime(){
    appendSwimmer(location1)
    await pause(200)
    appendSwimmer(location2)
    await pause(2000)
    appendSwimmer(location3)
    await pause(200)
    appendSwimmer(location4)
    await pause(200)
    appendSwimmer(location5)
    await pause(200)
    appendSwimmer(location6)
}
let startSwim = setInterval(swimmerAnime,1000) 