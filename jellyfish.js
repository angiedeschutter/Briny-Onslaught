
function jellySwim(){
    
    let jellyfish = document.createElement('img')
    jellyfish.src = './assets/jellyfish.png'
    jellyfish.style.position = 'fixed'
    document.body.append(jellyfish)
    jellyfish.style.height=200+'px'
    x=0
    y=0

    async function right(time){
        let startSwim = setInterval(swimRight,100) 
        
        function swimRight(){
            x=10+x
            jellyfish.style.left = x +'px'
        }  
        await stop(time)
        clearInterval(startSwim)
        }   
        
        async function left(time){
        let startSwim = setInterval(swimLeft,100) 
        function swimLeft(){
            x=x-10
            jellyfish.style.left = x +'px'
        }  
        await stop(time)
        clearInterval(startSwim)
        }  
        
        async function down(time){
        let startSwim = setInterval(swimDown,200) 
        function swimDown(){
            if(y<280){
                y=y+20
                jellyfish.style.top = y +'px'
            }else{y===280}
        }     
        await stop(time)
        clearInterval(startSwim)
        }   
        
        async function up(time){
        let startSwim = setInterval(swimUp,200) 
        function swimUp(){
            y=y-20
            jellyfish.style.top = y +'px'
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
                console.log(score)
            }
            
            creature.addEventListener('click', kill)
        }
        
            async function routeJ(){
                down(5000)
                await up(1200)
                await left(300)
                await up(100)
                down(100)
                await down(6000)
                await right(400)
                await up(500)
                left(900)
                }       
    
             routeJ()
             clickKill(jellyfish)
    
    
            }