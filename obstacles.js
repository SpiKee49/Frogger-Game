class Obstacle{
    constructor(x,y,width,height,speed,type){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.carType = (Math.floor(Math.random()* 3));
        this.logType = (Math.floor(Math.random()* 2));
    }
    draw(){
        
        if (this.type === 'car'){
            
            ctx4.drawImage(car,this.frameX * this.width,this.carType*this.height,grid*2,grid,this.x,this.y,this.width,this.height);
        }else if (this.type === 'log'){
            
            ctx4.drawImage(logs,this.logType * this.width,0,grid*2,grid,this.x,this.y,this.width,this.height);
        }else if (this.type === 'truck'){
            
            ctx4.drawImage(truck,this.frameX * this.width,this.carType*this.height,grid*3,grid,this.x,this.y,this.width,this.height);
        }else if (this.type === 'moon'){
            ctx4.drawImage(moon,0,0,grid,grid,this.x,this.y,this.width,this.height);

        }else{
            ctx4.drawImage(asteroid,0,0,grid*2,grid,this.x,this.y,this.width,this.height);
        }
    }
    update(){
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
            if (this.x > canvas.width) {
                this.x = -this.width;
                this.carType = (Math.floor(Math.random()* 3));
                this.logType = (Math.floor(Math.random()* 2));
            }   
        }
        else{
            this.frameX = 1;
            if (this.x < - this.width) {
                this.x = canvas.width;
                this.carType = (Math.floor(Math.random()* 3));
                this.logType = (Math.floor(Math.random()* 2));
            } 
        }
        
    }

}

function initObstacles(){
    if (level === 1) {
        //prvy pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 300;
            carsArray.push(new Obstacle(x,canvas.height - grid * 2-20,grid*2,grid,1,'car'));
            
        }
        //druhy pruh
        for (let i = 0; i < 1; i++) {
            let x = i * 400;
            carsArray.push(new Obstacle(x,canvas.height - grid * 3 - 20,grid*3,grid,1.5,'truck'));
            
        }

        //treti pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 500;
            carsArray.push(new Obstacle(x,canvas.height - grid * 4 -20,grid*2,grid,2,'car'));
            
        }
        //4 pruh
        for (let i = 0; i < 2
            ; i++) {
            let x = i * 250;
            carsArray.push(new Obstacle(x,canvas.height - grid * 6 -40,grid*2,grid,-5,'car'));
            
        }

        



    } else if (level === 2) {
        //prvy pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 300;
            logsArray.push(new Obstacle(x,canvas.height - grid * 2-20,grid*2,grid,1.2,'log'));
            
        }
        //druhy pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 400;
            logsArray.push(new Obstacle(x,canvas.height - grid * 3 - 20,grid*2,grid,1,'log'));
            
        }

        //treti pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 500;
            logsArray.push(new Obstacle(x,canvas.height - grid * 4 -20,grid*2,grid,2,'log'));
            
        }
        //4 pruh
        for (let i = 0; i < 1; i++) {
            let x = i * 250;
            logsArray.push(new Obstacle(x,canvas.height - grid * 5 -20,grid*2,grid,-2,'log'));
            
        }
        //5 pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 250;
            logsArray.push(new Obstacle(x,canvas.height - grid * 6 -20,grid*2,grid,-1,'log'));
            
        }

         





    }else if (level === 3){
        //prvy pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 300;
            asteroidsArray.push(new Obstacle(x,canvas.height - grid * 2-20,grid*2,grid,1,'asteroid'));
            
        }
        //druhy pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 400;
            asteroidsArray.push(new Obstacle(x,canvas.height - grid * 3 - 20,grid*2,grid,1.5,'asteroid'));
            
        }

        //treti pruh
        for (let i = 0; i < 2; i++) {
            let x = i * 500;
            asteroidsArray.push(new Obstacle(x,canvas.height - grid * 4 -20,grid*2,grid,2,'asteroid'));
            
        }
        //4 pruh
        for (let i = 0; i < 3; i++) {
            let x = i * 250;
            asteroidsArray.push(new Obstacle(x,canvas.height - grid * 5 -20,grid*2,grid,-2,'asteroid'));
            
        }
        //5 pruh
        for (let i = 0; i < 3; i++) {
            let x = i * 250;
            asteroidsArray.push(new Obstacle(x,canvas.height - grid * 6 -20,grid*2,grid,1,'asteroid'));
            
        }
        //mesiac
        for (let i = 0; i < 1; i++) {
            let x = i * 250;
            asteroidsArray.push(new Obstacle(x,canvas.height - grid * 7 -20,grid,grid,2,'moon'));
            
        }

    }

}

initObstacles();

function handleObstacles(){
    if(level === 1){
        
        for (let i = 0; i < carsArray.length; i++) {
            carsArray[i].update();
            carsArray[i].draw();
        }
        //collision with cars
        if (frogger.y > 30 && frogger.y < 505 ) {
        for (let i = 0; i < carsArray.length; i++) {
            if (colision(frogger, carsArray[i])) {
                if(!sfx) runover.play();
                gameOver();
            }
        }
    }
    }
    else if(level === 2){

        for (let i = 0; i < logsArray.length; i++) {
            logsArray[i].update();
            logsArray[i].draw();
        }
        //collision with logsArray
        if (frogger.y > 30 && frogger.y < 505 ) {
            safe = false;
            for (let i = 0; i < logsArray.length; i++) {
                if (colision(frogger,logsArray[i])) {
                frogger.x += logsArray[i].speed * gameSpeed;
                safe = true;
                } 
            }
            if (!safe){
                if(!sfx) water.play();
                gameOver();
            }
    }
    }
    else if(level === 3){

        for (let i = 0; i < asteroidsArray.length; i++) {
            asteroidsArray[i].update();
            asteroidsArray[i].draw();
        }
        if (frogger.y < 505 ) {
            safe = false;
            for (let i = 0; i < asteroidsArray.length; i++) {
                if (colision(frogger,asteroidsArray[i])) {
                frogger.x += asteroidsArray[i].speed * gameSpeed;
                safe = true;
                if (asteroidsArray[i].type === 'moon') {
                    if(!sfx) point.play();
                    score += 100;
                    gameSpeed += 0.15;
                    reset();
                }
                } 
            }
            if (!safe){
                if(!sfx) spaceDeath.play();
                gameOver();
            }
        }
    }
    
}