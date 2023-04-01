
function octopusSwim(){
    let octopusSwim = document.createElement('img')
    octopusSwim.src = './assets/octopus.png'
    octopusSwim.style.position = 'fixed'
    document.body.append(octopusSwim)
    octopusSwim.style.height=100+'px'
    xO=400
    octopusSwim.style.left = xO +'px'
    yO=100
    octopusSwim.style.top = yO +'px'

    async function rightO(time){
        let startSwimO = setInterval(swimRightO,1)     
        function swimRightO(){
            if(xO<700){
                xO=xO+1
                octopusSwim.style.left = xO +'px'
            }else{x===700}
        }     
        await stop(time)
        clearInterval(startSwimO)
    }   
        
    async function leftO(time){
        let startSwimO = setInterval(swimLeftO,1) 
        function swimLeftO(){
            if(xO>0){
                xO=xO-1
                octopusSwim.style.left = xO +'px'
            }else{xO===0}
        } 
        await stop(time)
        clearInterval(startSwimO)
    }  
        
    async function downO(time){
        let startSwimO = setInterval(swimDownO,1) 
        function swimDownO(){
            if(yO<434){
                yO=yO+1
                octopusSwim.style.top = yO +'px'
            }else{yO===434}
        }     
        await stop(time)
        clearInterval(startSwimO)
    }   
        
    async function upO(time){
        let startSwimO = setInterval(swimUpO,1) 
        function swimUpO(){
            if(yO>114){
                yO=yO-1
                octopusSwim.style.top = yO +'px'
            }else{yO===114}
        }  
        await stop(time)
        clearInterval(startSwimO)
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
        }
        creature.addEventListener('click', kill)
    }
    
    async function routeO(){
        await rightO(900)
        await downO(900)
        leftO(900)
        await upO(600)
        await rightO(700)
        await downO(600)
        await leftO(1000)
        await upO(700)
        await downO(1000)
        await upO(800)
        await leftO(1000)
        await upO(100)
        await rightO(400)
        await upO(500)
        await leftO(1000)
        await downO(1000)
        rightO(1200)
        upO(1000)
        await upO(700)
        await downO(1000)
        await upO(800)
        await leftO(1000)
        await upO(100)
        await rightO(400)
        await upO(500)
        await leftO(1000)
        downO(1000)
        leftO(1000)
        await rightO(1000)
        downO(1000)
        leftO(1000)

    }       
        routeO()
        clickKill(octopusSwim)

}
