function eelSwim(){
    let eelSwim = document.createElement('img')
    eelSwim.src = './assets/eel.png'
    eelSwim.style.position = 'fixed'
    document.body.append(eelSwim)
    eelSwim.style.height=100+'px'
    x=0
    y=0

    async function right(time){
        let startSwim = setInterval(swimRight,100)     
        function swimRight(){
            if(x<700){
                x=x+20
                eelSwim.style.left = x +'px'
            }else{x===700}
        }     
        await stop(time)
        clearInterval(startSwim)
    }   
        
    async function left(time){
        let startSwim = setInterval(swimLeft,100) 
        function swimLeft(){
            if(x>0){
                x=x-20
                eelSwim.style.left = x +'px'
            }else{x===0}
        } 
        await stop(time)
        clearInterval(startSwim)
    }  
        
    async function down(time){
        let startSwim = setInterval(swimDown,200) 
        function swimDown(){
            if(y<280){
                y=y+20
                eelSwim.style.top = y +'px'
            }else{y===280}
        }     
        await stop(time)
        clearInterval(startSwim)
    }   
        
    async function up(time){
        let startSwim = setInterval(swimUp,200) 
        function swimUp(){
            if(y>0){
                y=y-20
                eelSwim.style.top = y +'px'
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
            scoreCount.push(100)
            score=0
            scoreCount.forEach(value =>{
                score+=value
            })
            let totalScore=score
            para.innerText=totalScore
            document.getElementById('scoreCount').appendChild(para)
        }
        creature.addEventListener('click', kill)
    }
    
    async function routeJ(){
        await down(600)
        await right(1000)
        await up(300)
        await left(1000)
        await down(100)
        await right(1000)
        await down(2400)
        await up(1500)
        await down(100)
        await right(2000)
        await right(100)
        left(90)
    }       
    
    async function eelCombo(){
        routeJ()
        clickKill(eelSwim)
    }

    eelCombo()
}
