
function jellySwim(){
    let jellyfish = document.createElement('img')
    jellyfish.src = './assets/jellyfish.png'
    jellyfish.style.position = 'fixed'
    document.body.append(jellyfish)
    jellyfish.style.height=150+'px'
    xJ=200
    jellyfish.style.left = xJ +'px'
    yJ=200
    jellyfish.style.top = yJ +'px'

    async function rightJ(time){
        let startSwimJ = setInterval(swimRightJ,1)     
        function swimRightJ(){
            if(xJ<700){
                xJ=xJ+3
                jellyfish.style.left = xJ +'px'
            }else{xJ===700}
        }     
        await stop(time)
        clearInterval(startSwimJ)
    }   
        
    async function leftJ(time){
        let startSwimJ = setInterval(swimLeftJ,1) 
        function swimLeftJ(){
            if(xJ>0){
                xJ=xJ-3
                jellyfish.style.left = xJ +'px'
            }else{xJ===0}
        } 
        await stop(time)
        clearInterval(startSwimJ)
    }  
        
    async function downJ(time){
        let startSwimJ = setInterval(swimDownJ,1) 
        function swimDownJ(){
            if(yJ<320){
                yJ=yJ+3
                jellyfish.style.top = yJ +'px'
            }else{yJ===320}
        }     
        await stop(time)
        clearInterval(startSwimJ)
    }   
        
    async function upJ(time){
        let startSwimJ = setInterval(swimUpJ,1) 
        function swimUpJ(){
            if(yJ>0){
                yJ=yJ-3
                jellyfish.style.top = yJ +'px'
            }else{yJ===0}
        }  
        await stop(time)
        clearInterval(startSwimJ)
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
            scoreCount.push(300)
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
    
    async function route1(){
        await downJ(600)
        await rightJ(700)
        await upJ(200)
        await leftJ(300)
        await downJ(100)
        await rightJ(1000)
        await leftJ(800)
        leftJ(1500)
        upJ(900)
        await rightJ(1000)
        await downJ(1000)
        await rightJ(1000)
        await leftJ(400)
        await downJ(700)
        await upJ(100)
        await leftJ(150)
        await rightJ(100)
        await upJ(500)
        await downJ(500)
        await leftJ(500)
        await rightJ(500)
        await upJ(1000)
        await leftJ(250)
        await rightJ(300)
        await upJ(500)
        leftJ(400)
        await downJ(500)
        await rightJ(300)
        await upJ(500)
        await leftJ(400)
        await downJ(700)
        upJ(500)
        rightJ(900)
        await downJ(400)
        leftJ(400)
        await rightJ(400)
        upJ(400)
        await leftJ(400)
        await downJ(400)
        await rightJ(300)
        await upJ(500) 
        await leftJ(250)
        await rightJ(300)
        await upJ(500)
        await leftJ(400)
        await downJ(700)

    }
     
    async function jellyCombo(){
        route1()
        clickKill(jellyfish)
    }

    jellyCombo()
}

