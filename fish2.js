/*This function spawns a blue fish and a route.
each creature needs to have it's own route functions
with different x and y variables, otherwise they interfere
with each other. Each creature needs to create and append
the image file within the swim function below, otherwise
it will not spawn multiple creatures when invoked.
*/
function fish2Swim(){
    let fish2 = document.createElement('img')
    fish2.src = './assets/fish2.png'
    fish2.style.position = 'fixed'
    document.body.append(fish2)
    fish2.style.height=100+'px'
    xF2=600
    fish2.style.left = xF +'px'
    yF2=200
    fish2.style.top = yF +'px'
//this moves the swimmer right on the screen for a given time and stays within the background
    async function right(time){
        let startSwim = setInterval(swimRight,7)     
        function swimRight(){
            if(xF2<700){
                xF2=xF2+2
                fish2.style.left = xF2 +'px'
            }else{xF2===700}
        }     
        await wait(time)
        clearInterval(startSwim)
    }   
//this moves the swimmer left on the screen for a given time and stays within the background        
    async function left(time){
        let startSwim = setInterval(swimLeft,7) 
        function swimLeft(){
            if(xF2>0){
                xF2=xF2-2
                fish2.style.left = xF2 +'px'
            }else{xF2===0}
        } 
        await wait(time)
        clearInterval(startSwim)
    }  
//this moves the swimmer down on the screen for a given time and stays within the background        
    async function down(time){
        let startSwim = setInterval(swimDown,7) 
        function swimDown(){
            if(yF2<394){
                yF2=yF2+2
                fish2.style.top = yF2 +'px'
            }else{yF2===394}
        }     
        await wait(time)
        clearInterval(startSwim)
    }   
//this moves the swimmer up on the screen for a given time and stays within the background        
    async function up(time){
        let startSwim = setInterval(swimUp,7) 
        function swimUp(){
            if(yF2>114){
                yF2=yF2-2
                fish2.style.top = yF2 +'px'
            }else{yF2===114}
        }  
        await stwaitop(time)
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
        await left(700)
        await right(700)
        await up(500)
        await down(700)
        await up(500)
        await right(500)
        await down(100)
        await left(1600)
        right(700)
        await down(300)
        await left(1000)
        await right(200)
        await up(500)
        await right(500)
        await up(500)
        await left(600)
        await down(100)
        await left(1000)
        await right(200)
        down (300)
        await left(90)
        await down(100)
        await right(1000)
        await down(400)
        down (300)
        await left(90)
        await down(600)
        right(700)
        await up(300)
        await left(700)
        await right(700)
        await up(500)
        await left(500)
        await up(500)
        await down(400)
        await right(400)
        await down(400)
        await up(500)
        await down(100) 
        await up(500)
        await down(100)
        await left(1000)
        await right(200)
        down (300)
        await left(700)
    }       
        route()
        //This invokes the function to kill the given creature and push the given points to the total score
        clickKill(fish2,200)
}