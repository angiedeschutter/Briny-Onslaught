
function startSwimmer(){

    let swimmer = document.createElement('img')
    swimmer.src = './assets/Swim1.png'
    swimmer.style.position = 'fixed'
    document.getElementById('backgroundDiv').appendChild(swimmer)
    x=0
    swimmer.style.left = x +'px'
    y=0
    swimmer.style.top = y +'px'
    swimmer.style.height=40+'px'

async function right(time){
    let startSwim = setInterval(swimRight,1) 
    function swimRight(){
        if(x<725){
            x=x+1
            swimmer.style.left = x +'px'
        }else{x===725}
    }  
    await stop(time)
    clearInterval(startSwim)
    }   
    
    async function left(time){
    let startSwim = setInterval(swimLeft,1) 
    function swimLeft(){
        if(x>20){
            x=x-1
            swimmer.style.left = x +'px'
        }else{x===20}
    }  
    await stop(time)
    clearInterval(startSwim)
    }  
    
    async function down(time){
        let startSwim = setInterval(swimDown,1) 
        function swimDown(){
            if(y<420){
                y=y+1
                swimmer.style.top = y +'px'
            }else{y===420}
        }  
        await stop(time)
        clearInterval(startSwim)
    }   
    
    async function up(time){
    let startSwim = setInterval(swimUp,1) 
    function swimUp(){
        if(y>0){
            y=y-1
            swimmer.style.top = y +'px'
        }else{y===0}
    }  
    await stop(time)
    clearInterval(startSwim)
    }   
    
    function stop(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
    }
       
    let killAudio=document.querySelector("#audioDeath")
    
    function clickKill(creature){
        function kill(){
            killAudio.play()
            scoreCount.push(-50)
            score=0
            scoreCount.forEach(value =>{
                score+=value
            })
            let totalScore=score
            para.innerText=totalScore
        }
        creature.addEventListener('click', kill)
        }
        async function route(){
            await down(600)
            await right(1000)
            await up(300)
            await left(1000)
            await down(100)
            await right(1000)
            await down(1800)
            up(1500)
            right(900)
            await down(1000)
            await left(2000)
            await right(2000)
            await up(1500)
            await left(1000)
            down(1000)
            left(1000)
            await right(1500)
            await up(1000)
            await down(1000)
            right(1000)
            down(1000)
            await right(500)
            await up(500)
            await left(1500)
            await down (500)
        }       
                    
        route()
        clickKill(swimmer)      
    }
    