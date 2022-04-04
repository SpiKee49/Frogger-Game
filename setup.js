const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;


//globalne premenne
const grid = 80;
let keys = [];
let score = 0;
let frame = 0;
let level = 1;
let gameSpeed = 1;
let safe = false;

const carsArray = [];
const logsArray = [];
const asteroidsArray = [];


//obrasky

const truck = new Image();
truck.src = 'img/traks-spritesheet.png';

const asteroid = new Image();
asteroid.src = 'img/asteroid.png';

const moon = new Image();
moon.src = 'img/moon.png';

const car = new Image();
car.src = 'img/kars-spritesheet.png';

const frog  = new Image();
frog.src = 'img/frog_spritesheet.png';

const logs = new Image();
logs.src = 'img/logs.png';

//ovladanie menu
let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if(!sfx) click.play();  
        if (buttons[i].textContent === "PLAY") {
            start();
        }else if (buttons[i].textContent === "INSTRUCTIONS") {
            $(".instruct").show();
        }else if(buttons[i].textContent === "EXIT") {
            window.close();
        }else if (buttons[i].textContent === "TRY AGAIN"){
            tryAgain();
        }else if (buttons[i].textContent === "EXIT TO MENU"){
            exitToMenu();
        }
    };
    
}


//cele audio
const musicInLevels = ["mixkit-sicilian-coffee-613.mp3","mixkit-kids-786.mp3","mixkit-70s-cop-chase-396.mp3"];

const music = new Audio();
music.src = "music/"+musicInLevels[level-1];

const jump = new Audio();
jump.src = "sfx/jump.mp3"

const point = new Audio();
point.src = "sfx/point.mp3"

const click = new Audio();
click.src = "sfx/click.mp3"

const water = new Audio();
water.src = "sfx/water.mp3"

const spaceDeath = new Audio();
spaceDeath.src = "sfx/space-death.mp3"

const runover = new Audio();
runover.src = "sfx/runover.mp3"

let musicPlaying = false;
let sfx = false;


