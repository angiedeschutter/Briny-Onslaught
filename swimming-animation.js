//This spawns a image of the swimmer by the title to be used for an animation, not part of gameplay
let swimNo = document.getElementById('swimAnime')
swimNo.style.top = 40+'px'
swimNo.style.left =400+'px'
swimNo.style.height = 40+'px'

//This function will place the called image to the screnn
function appendSwimmer(image){
    document.getElementById('swimAnime').src=image
}

//Each image location is set to a variable to be called in the appendSwimmer function
let image1='./assets/Swim1.png'
let image2='./assets/Swimmer2.png'
let image3='./assets/Swimmer3.png'
let image4='./assets/Swimmer4.png'
let image5='./assets/Swimmer5.png'
let image6='./assets/Swimmer6.png'

//This is a promise function that will delay the appending of each image to create a sequence of movement
function wait(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

//This function will place each image in order with a delay(pause) to create an animation, the longer the shorter the pause, the faster the image moves
async function swimmerAnime(){
    appendSwimmer(image1)
    await wait(200)
    appendSwimmer(image2)
    await wait(200)
    appendSwimmer(image3)
    await wait(200)
    appendSwimmer(image4)
    await wait(200)
    appendSwimmer(image5)
    await wait(200)
    appendSwimmer(image6)
}
//This function repeats the swimmerAnime function every second
setInterval(swimmerAnime,1000) 