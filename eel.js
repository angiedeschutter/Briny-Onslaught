/*This function spawns an eel and a route.
each creature needs to have it's own route functions
with different x and y variables, otherwise they interfere
with each other. Each creature needs to create and append
the image file within the swim function below, otherwise
it will not spawn multiple creatures when invoked.
*/
function eelSwim(){
    let eel = document.createElement('img')
    eel.src = './assets/eel.png'
    eel.style.position = 'fixed'
    document.body.append(eel)
    eel.style.height=150+'px'
    xE=0
    eel.style.left = xE +'px'
    yE=320
    eel.style.top = yE +'px'
 //this moves the swimmer right on the screen for a given time and stays within the background
    async function right(time){
        let startSwim = setInterval(swimRight,7)     
        function swimRight(){
            if(xE<680){
                xE=xE+2
                eel.style.left = xE +'px'
            }else{x===680}
        }     
        await wait(time)
        clearInterval(startSwim)
    }   
 //this moves the swimmer left on the screen for a given time and stays within the background        
    async function left(time){
        let startSwim = setInterval(swimLeft,7) 
        function swimLeft(){
            if(xE>0){
                xE=xE-2
                eel.style.left = xE +'px'
            }else{xE===0}
        } 
        await wait(time)
        clearInterval(startSwim)
    }  
 //this moves the swimmer down on the screen for a given time and stays within the background        
    async function down(time){
        let startSwim = setInterval(swimDown,7) 
        function swimDown(){
            if(yE<434){
                yE=yE+2
                eel.style.top = yE +'px'
            }else{yE===434}
        }     
        await wait(time)
        clearInterval(startSwim)
    }   
 //this moves the swimmer up on the screen for a given time and stays within the background        
    async function up(time){
        let startSwim = setInterval(swimUp,7) 
        function swimUp(){
            if(yE>114){
                yE=yE-2
                eel.style.top = yE +'px'
            }else{yE===114}
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
   //This it the eel's route     
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
        route()
        //This invokes the function to kill the given creature and push the given points to the total score
        clickKill(eel,200)
}
