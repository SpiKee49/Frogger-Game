class Frogger {
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height -40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;

    }
    update(){
        //console.log('update');
        if (keys[38]){ //hore
            if (this.moving === false) {
                this.y -= grid;
                this.moving = true;
               
                this.frameY = 0;
            }
        }
        if (keys[40]){  //dole
            if (this.moving === false && this.y < (canvas.height - this.height * 2) ) {
                this.y += grid;
                this.moving = true;
                
                this.frameY = 3;
            }
        }
        if (keys[37]){  //dolava
            if (this.moving === false  && this.x > this.width ) {
                this.x -= grid;
                this.moving = true;
               
                this.frameY = 2;
            }
        }
        if (keys[39]){  //dolava
            if (this.moving === false  && this.x <(canvas.width - this.width * 2) ){
                this.x += grid;
                this.moving = true;
               
                this.frameY = 1;
            }
        }
        
    }
    draw(){
        
        ctx3.drawImage(frog,this.frameX * this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-25,this.y-25,this.width*2,this.height*2);

    }
    jump(){
        if (!sfx) {
            jump.play();
        }
        if (this.moving === false) {
            this.frameX = 1;
        }else if (this.moving === true) {
            this.frameX = 0;
        }
    }
    

}

const frogger = new Frogger();



