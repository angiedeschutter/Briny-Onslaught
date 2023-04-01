function eelSwim(){
    let eelSwim = document.createElement('img')
    eelSwim.src = './assets/eel.png'
    eelSwim.style.position = 'fixed'
    document.body.append(eelSwim)
    eelSwim.style.height=150+'px'
    xE=0
    eelSwim.style.left = xE +'px'
    yE=320
    eelSwim.style.top = yE +'px'

    async function right(time){
        let startSwim = setInterval(swimRight,1)     
        function swimRight(){
            if(xE<680){
                xE=xE+2
                eelSwim.style.left = xE +'px'
            }else{x===680}
        }     
        await stop(time)
        clearInterval(startSwim)
    }   
        
    async function left(time){
        let startSwim = setInterval(swimLeft,1) 
        function swimLeft(){
            if(xE>0){
                xE=xE-2
                eelSwim.style.left = xE +'px'
            }else{xE===0}
        } 
        await stop(time)
        clearInterval(startSwim)
    }  
        
    async function down(time){
        let startSwim = setInterval(swimDown,1) 
        function swimDown(){
            if(yE<434){
                yE=yE+2
                eelSwim.style.top = yE +'px'
            }else{yE===434}
        }     
        await stop(time)
        clearInterval(startSwim)
    }   
        
    async function up(time){
        let startSwim = setInterval(swimUp,1) 
        function swimUp(){
            if(yE>114){
                yE=yE-2
                eelSwim.style.top = yE +'px'
            }else{yE===114}
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
        await down(100)
        await right(1000)
        await up(800)
        right(1000)
        await down(400)
        await right(100)
        await up(300)
        await left(1000)
        await down(700)
        await right(400)
        await down(400)
        await up(800)
        right(400)
        await down(500)
        await right(400)
        left(400)
        await left(400)
        await down(300)
        await right(400)
        await down(740)
        await up(800)
        right(400)
        await down(600)
        await left(100)
        await up(300)
        await left(1000)
        await down(700)
        await right(400)
        await down(400)
        await up(800)
        right(400)
        await down(500)
        await right(400)
        left(400)
        await left(400)
        await down(300)
        await right(400)
        await left(1000)
        await down(700)
        await right(400)
        await down(400)
        await up(800)
        right(400)
        await down(500)
    }       
    
    async function eelCombo(){
        route()
        clickKill(eelSwim)
    }

    eelCombo()
}
