
    let swimmer = document.createElement('img')
    swimmer.src = './assets/Swim1.png'
    swimmer.style.position = 'absolute'
    document.body.append(swimmer)
x=0


function swimRight(){
   
    x=10+x
    swimmer.style.left = x +'px'
}

setInterval(swimRight,100