class Background{
    constructor(){
        this.background = new Image();
        this.water = new Image();
        this.water.src = 'img/voda.png';
    }
    
    
    update(){
        if (level === 1) {
            this.background.src = 'img/dialnica.png';
            
        }else if (level === 2){
            this.background.src = 'img/river-shores.png';
        }else if (level === 3){
            this.background.src = 'img/space-shore.png';
            this.water.src = 'img/space.png';
        }
    }
    draw(){
  
        ctx1.drawImage(this.water,0,0,canvas.width,canvas.height);
        ctx1.drawImage(this.background,0,0,canvas.width,canvas.height);

    }
}

const background = new Background();