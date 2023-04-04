/*This function spawns a jellysih and a route.
Each creature needs to have it's own route functions
with different x and y variables, otherwise they interfere
with each other. Each creature needs to create and append
the image file within the swim function below, otherwise
it will not spawn multiple creatures when invoked.
*/

function jellySwim(){
    let jellyfish = document.createElement('img')
    jellyfish.src= './assets/jellyfish.png'
    jellyfish.style.position = 'fixed'
    jellyfish.style.height=150+'px'
    document.body.append(jellyfish)
    xJ=200
    jellyfish.style.left = xJ +'px'
    yJ=200
    jellyfish.style.top = yJ +'px'
//this moves the swimmer right on the screen for a given time and stays within the background
    async function rightJ(time){
        let startSwimJ = setInterval(swimRightJ,6)     
        function swimRightJ(){
            if(xJ<700){
                xJ=xJ+3
                jellyfish.style.left = xJ +'px'
            }else{xJ===700}
        }     
        await wait(time)
        clearInterval(startSwimJ)
    }   
//this moves the swimmer left on the screen for a given time and stays within the background        
    async function leftJ(time){
        let startSwimJ = setInterval(swimLeftJ,6) 
        function swimLeftJ(){
            if(xJ>0){
                xJ=xJ-3
                jellyfish.style.left = xJ +'px'
            }else{xJ===0}
        } 
        await wait(time)
        clearInterval(startSwimJ)
    }  
//this moves the swimmer down on the screen for a given time and stays within the background        
    async function downJ(time){
        let startSwimJ = setInterval(swimDownJ,6) 
        function swimDownJ(){
            if(yJ<434){
                yJ=yJ+3
                jellyfish.style.top = yJ +'px'
            }else{yJ===434}
        }     
        await wait(time)
        clearInterval(startSwimJ)
    }   
//this moves the swimmer up on the screen for a given time and stays within the background        
    async function upJ(time){
        let startSwimJ = setInterval(swimUpJ,6) 
        function swimUpJ(){
            if(yJ>114){
                yJ=yJ-3
                jellyfish.style.top = yJ +'px'
            }else{yJ===114}
        }  
        await wait(time)
        clearInterval(startSwimJ)
    }   
//This function sets a time out promise to make sure each route function is completed before the next one is invoked               
    function wait(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })  
    }
 
  //This it the jellyfish's route   
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
        route1()
        //This invokes the function to kill the given creature and push the given points to the total score
        clickKill(jellyfish, 300)
}