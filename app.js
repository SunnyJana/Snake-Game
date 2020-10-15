// Step 1 : Create Arena
var width = 520;
var height = width;
var canvas = document.getElementById('snake-game');


// 2. Creating a snake game body
var ctx = canvas.getContext('2d'); // 2d is the object type of the canvas
ctx.fillStyle = '#A7D948';
ctx.fillRect(0,0,width,height);

var N = 20;
var cellSize = width/N;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        // Paint Small cell
        if((i+j)%2 == 0){
            ctx.fillStyle = '#8ECC39';
        }
        else{
            ctx.fillStyle = '#A7D948';
        }
        // x,y, width, height
        ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);
    }
}


// 3. Detect a keypress(detect 4 arrow keys only)
var state = 0; // 0->right, 1->down, 2->left, 3->up

function handleKey(e){
    e = e || window.event;

    if (e.keyCode == '38' && state != 1 && state != 3){
        // up arrow
        state = 3;
        play = true;
    }
    else if (e.keyCode == '40' && state != 1 && state != 3){
        // down arrow
        state = 1;
        play = true;
    }
    else if (e.keyCode == '37' && state != 0 && state != 2){
        // left arrow
        state = 2;
        play = true;
    }
    else if (e.keyCode == '39' && state != 0 && state != 2){
        // right arrow
        state = 0;
        play = true;
    }
    //console.log(e.keyCode);
    if(play)
    playAudio();
}
document.onkeydown = handleKey;
function update(){

}
setInterval(update,300);


// 4. Audio Play
function playAudio(){
    var audio = new Audio('https://soundjay.com/switch/switch-3.wav');
    audio.play();
}

function playConsume(){
    var audio = new Audio('https://soundjay.com/button/button-3.wav');
    audio.play();
}
