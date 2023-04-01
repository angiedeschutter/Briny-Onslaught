
function fish1Swim(){
    let fishSwim = document.createElement('img')
    fishSwim.src = './assets/fish1.png'
    fishSwim.style.position = 'fixed'
    document.body.append(fishSwim)
    fishSwim.style.height=100+'px'
    xF=100
    fishSwim.style.left = xF +'px'
    yF=200
    fishSwim.style.top = yF +'px'

    async function right(time){
        let startSwim = setInterval(swimRight,1)     
        function swimRight(){
            if(xF<700){
                xF=xF+2
                fishSwim.style.left = xF +'px'
            }else{xF===700}
        }     
        await stop(time)
        clearInterval(startSwim)
    }   
        
    async function left(time){
        let startSwim = setInterval(swimLeft,1) 
        function swimLeft(){
            if(xF>0){
                xF=xF-2
                fishSwim.style.left = xF +'px'
            }else{xF===0}
        } 
        await stop(time)
        clearInterval(startSwim)
    }  
        
    async function down(time){
        let startSwim = setInterval(swimDown,1) 
        function swimDown(){
            if(yF<394){
                yF=yF+2
                fishSwim.style.top = yF +'px'
            }else{yF===394}
        }     
        await stop(time)
        clearInterval(startSwim)
    }   
        
    async function up(time){
        let startSwim = setInterval(swimUp,1) 
        function swimUp(){
            if(yF>114){
                yF=yF-2
                fishSwim.style.top = yF +'px'
            }else{yF===114}
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
            scoreCount.push(200)
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
        right(700)
        await up(300)
        await left(700)
        await right(700)
        await up(500)
        await right(500)
        await up(500)
        await left(600)
        await down(100)
        await right(1000)
        await down(400)
        await up(500)
        await down(100)
        await left(1000)
        await right(200)
        down (300)
        await left(90)
        await down(100)
        await right(1000)
        await down(400)
        await up(500)
        await down(100)
        await left(1000)
        await right(200)
        down (300)
        await left(90)
        await down(600)
        right(700)
        await up(300)
        await left(700)
        await right(700)
        await up(500)
        await right(500)
        await up(500)
        await down(400)
        await up(500)
        await down(100)
        await left(1000)
        await right(200)
        down (300)
        await left(700)
        await right(700)
        await up(500)
        await right(500)
    }       
    
    async function fish1Combo(){
        route()
        clickKill(fishSwim)
    }

    fish1Combo()
}
