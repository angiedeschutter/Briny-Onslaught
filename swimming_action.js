


function startSwimmer(){

    let swimmer = document.createElement('img')
    swimmer.src = './assets/Swim1.png'
    swimmer.style.position = 'absolute'
    document.body.append(swimmer)
    x=0
    y=0

async function right(time){
    let stopSwim = setInterval(swimRight,100) 
    function swimRight(){
        x=10+x
        swimmer.style.left = x +'px'
    }  
    await stop(time)
    clearInterval(stopSwim)
    }   
    
    async function left(time){
    let stopSwim = setInterval(swimLeft,100) 
    function swimLeft(){
        x=x-10
        swimmer.style.left = x +'px'
    }  
    await stop(time)
    clearInterval(stopSwim)
    }  
    
    async function down(time){
    let stopSwim = setInterval(swimDown,200) 
    function swimDown(){
        y=y+10
        swimmer.style.top = y +'px'
    }  
    await stop(time)
    clearInterval(stopSwim)
    }   
    
    async function up(time){
    let stopSwim = setInterval(swimUp,200) 
    function swimUp(){
        y=y-10
        swimmer.style.top = y +'px'
    }  
    await stop(time)
    clearInterval(stopSwim)
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
            scoreCount.push(100)
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
            right(1000)
            await down(1000)
            await left(1000)
            await up(500)
            right(200)
            }
        
            route()
         clickKill(swimmer)      

    

    }
    