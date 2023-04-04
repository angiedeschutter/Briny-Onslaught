/*This function spawns a swimmer and a route.
each creature needs to have it's own route functions
with different x and y variables, otherwise they interfere
with each other
*/
function startSwimmer(){
    //this spwans the swimmer to the page and starting location
    let swimmer = document.createElement('img')
    swimmer.src = './assets/Swim1.png'
    swimmer.style.position = 'fixed'
    swimmer.style.height=100+'px'
    document.body.append(swimmer)
    x=0
    swimmer.style.left = x +'px'
    y=113
    swimmer.style.top = y +'px'
    swimmer.style.height=40+'px'
//this moves the swimmer right on the screen for a given time and stays within the background
    async function right(time){
        let startSwim = setInterval(swimRight,1) 
        function swimRight(){
            if(x<725){
                x=x+1
                swimmer.style.left = x +'px'
            }else{x===725}
        }  
        await wait(time)
        clearInterval(startSwim)
    }   
 //this moves the swimmer left on the screen for a given time and stays within the background   
    async function left(time){
        let startSwim = setInterval(swimLeft,1) 
        function swimLeft(){
            if(x>20){
                x=x-1
                swimmer.style.left = x +'px'
            }else{x===20}
        }  
        await wait(time)
        clearInterval(startSwim)
    }  
 //this moves the swimmer down on the screen for a given time and stays within the background   
    async function down(time){
        let startSwim = setInterval(swimDown,1) 
        function swimDown(){
            if(y<534){
                y=y+1
                swimmer.style.top = y +'px'
            }else{y===534}
        }  
        await wait(time)
        clearInterval(startSwim)
    }   
 //this moves the swimmer up on the screen for a given time and stays within the background   
    async function up(time){
        let startSwim = setInterval(swimUp,1) 
        function swimUp(){
            if(y>114){
                y=y-1
                swimmer.style.top = y +'px'
            }else{y===114}
        }  
        await wait(time)
        clearInterval(startSwim)
    }   
  //This function sets a time out promise to make sure each route function is completed before the next one is invoked    
    function wait(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })  
    }
 
    //defines the sound effect when the swimmer is clicked
    let killAudio=document.querySelector("#audioDeath")
    //when the swimmer is clicked, a -50 will be added to the total score and have the #audio death sound effect
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
        //This it the swimmer's route
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
    

