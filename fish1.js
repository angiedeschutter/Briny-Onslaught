/*This function spawns a gray fish and a route.
each creature needs to have it's own route functions
with different x and y variables, otherwise they interfere
with each other. Each creature needs to create and append
the image file within the swim function below, otherwise
it will not spawn multiple creatures when invoked.
*/
function fish1Swim(){
    let fish = document.createElement('img')
    fish.src = './assets/fish1.png'
    fish.style.position = 'fixed'
    document.body.append(fish)
    fish.style.height=100+'px'
    xF=100
    fish.style.left = xF +'px'
    yF=200
    fish.style.top = yF +'px'
//this moves the swimmer right on the screen for a given time and stays within the background
    async function right(time){
        let startSwim = setInterval(swimRight,7)     
        function swimRight(){
            if(xF<700){
                xF=xF+2
                fish.style.left = xF +'px'
            }else{xF===700}
        }     
        await wait(time)
        clearInterval(startSwim)
    }   
//this moves the swimmer left on the screen for a given time and stays within the background        
    async function left(time){
        let startSwim = setInterval(swimLeft,7) 
        function swimLeft(){
            if(xF>0){
                xF=xF-2
                fish.style.left = xF +'px'
            }else{xF===0}
        } 
        await wait(time)
        clearInterval(startSwim)
    }  
//this moves the swimmer down on the screen for a given time and stays within the background        
    async function down(time){
        let startSwim = setInterval(swimDown,7) 
        function swimDown(){
            if(yF<394){
                yF=yF+2
                fish.style.top = yF +'px'
            }else{yF===394}
        }     
        await wait(time)
        clearInterval(startSwim)
    }   
//this moves the swimmer up on the screen for a given time and stays within the background        
    async function up(time){
        let startSwim = setInterval(swimUp,7) 
        function swimUp(){
            if(yF>114){
                yF=yF-2
                fish.style.top = yF +'px'
            }else{yF===114}
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
   //This it the fish's route 
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
        route()
        //This invokes the function to kill the given creature and push the given points to the total score
        clickKill(fish,200)
}
