
function startSwimmer(){

    let swimmer = document.createElement('img')
    swimmer.src = './assets/Swim1.png'
    swimmer.style.position = 'fixed'
    document.getElementById('backgroundDiv').appendChild(swimmer)
    swimmer.style.height=50+'px'
    x=20
    y=0

async function right(time){
    let startSwim = setInterval(swimRight,100) 
    function swimRight(){
        if(x<750){
            x=x+20
            swimmer.style.left = x +'px'
        }else{x===7500}
    }  
    await stop(time)
    clearInterval(startSwim)
    }   
    
    async function left(time){
    let startSwim = setInterval(swimLeft,100) 
    function swimLeft(){
        if(x>0){
            x=x-20
            swimmer.style.left = x +'px'
        }else{x===0}
    }  
    await stop(time)
    clearInterval(startSwim)
    }  
    
    async function down(time){
    let startSwim = setInterval(swimDown,200) 
    function swimDown(){
        if(y<400){
            y=y+20
            swimmer.style.top = y +'px'
        }else{y===400}
    }  
    await stop(time)
    clearInterval(startSwim)
    }   
    
    async function up(time){
    let startSwim = setInterval(swimUp,200) 
    function swimUp(){
        if(y>0){
            y=y-20
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
            creature.remove()
            killAudio.play()
            scoreCount.push(-50)
            score=0
            scoreCount.forEach(value =>{
                score+=value
            })
            let totalScore=score
            para.innerText=totalScore
            document.getElementById('scoreCount').appendChild(para)
            console.log(score)
        }
        creature.addEventListener('click', kill)
    
        }
    
        async  function route(){
            right(1000)
            await down(1000)
            await right(1000)
            await up(500)
            await right(1000)
            await down(1000)
            await left(1000)
            await up(500)
            right(200)
            }
        
        route()
        clickKill(swimmer)      
    }
    