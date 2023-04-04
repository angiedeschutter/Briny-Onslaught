/*This function spawns an octopus and a route.
each creature needs to have it's own route functions
with different x and y variables, otherwise they interfere
with each other. Each creature needs to create and append
the image file within the swim function below, otherwise
it will not spawn multiple creatures when invoked.
*/
function octopusSwim(){
   let octopus = document.createElement('img')
    octopus.src = './assets/octopus.png'
    octopus.style.position = 'fixed'
    octopus.style.height=120+'px'
    document.body.append(octopus)
    xO=400
    octopus.style.left = xO +'px'
    yO=100
    octopus.style.top = yO +'px'
    //this moves the swimmer right on the screen for a given time and stays within the background
    async function right(time){
        let startSwim = setInterval(swimRight,10)     
        function swimRight(){
            if(xO<700){
                xO=xO+1
                octopus.style.left = xO +'px'
            }else{x===700}
        }     
        await wait(time)
        clearInterval(startSwim)
    }   
 //this moves the swimmer left on the screen for a given time and stays within the background       
    async function left(time){
        let startSwim = setInterval(swimLeft,10) 
        function swimLeft(){
            if(xO>0){
                xO=xO-1
                octopus.style.left = xO +'px'
            }else{xO===0}
        } 
        await wait(time)
        clearInterval(startSwim)
    }  
//this moves the swimmer down on the screen for a given time and stays within the background        
    async function down(time){
        let startSwim = setInterval(swimDown,10) 
        function swimDown(){
            if(yO<434){
                yO=yO+1
                octopus.style.top = yO +'px'
            }else{yO===434}
        }     
        await wait(time)
        clearInterval(startSwim)
    }   
//this moves the swimmer up on the screen for a given time and stays within the background        
    async function up(time){
        let startSwim = setInterval(swimUp,10) 
        function swimUp(){
            if(yO>114){
                yO=yO-1
                octopus.style.top = yO +'px'
            }else{yO===114}
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
   //This it the octopus' route 
    async function route(){
        await right(900)
        await down(900)
        left(900)
        await up(600)
        await right(700)
        await down(600)
        await left(1000)
        await up(700)
        await down(1000)
        await up(800)
        await left(1000)
        await up(100)
        await right(400)
        await up(500)
        await left(1000)
        await down(1000)
        right(1200)
        up(1000)
        await up(700)
        await down(1000)
        await up(800)
        await left(1000)
        await up(100)
        await right(400)
        await up(500)
        await left(1000)
        down(1000)
        left(1000)
        await right(1000)
        down(1000)
        left(1000)
    }       
        route()
        //This invokes the function to kill the given creature and push the given points to the total score
        clickKill(octopus,200)
}