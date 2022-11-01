//background gif
let img = [];
let numImg = 20;
var changeImg = 1;

//call menu or game
var scr = "menu";

//elements of the game
var score = 0;
var hit = false;
var speed = 0;

//elements of the guitar
var wtasto1 = 100;
var htasto1 = 60;
var wtasto2 = 60;
var htasto2 = 30;
var guitar;

//countdown
var countdown = 3;
var countdownFill = 255;

//note array
var n = [];

//hitbox array
var h = [];

function preload (){
    mySong = loadSound('assets/Wont you fly high.mp3');
    myFont = loadFont ('assets/VCR_MONO.ttf');

    //array to load all the images
    for (let i = 1; i < numImg; i++) {    
        img[i] = loadImage("assets/" + i +".gif");
    }
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    textFont(myFont);
    rectMode(CENTER);
    ellipseMode(CENTER);
    textAlign(CENTER);
}

function draw() {
    //menu screen
    if (scr == "menu") {
        background(0);
        menu();
    }

    //game screen
    if (scr == "game") {
        background(0) 
        if (mySong.currentTime() >= 18){
            image(img[changeImg], 0, 0, width, height);
        } 

        //background changes based on the score
        switch (score){
            case 5000:
                changeImg = int(random(2,numImg));
                score = 5200
                break;
            case 8000:
                changeImg = int(random(2,numImg));
                score = 8200
                break;
            case 10000:
                changeImg = int(random(2,numImg));
                score = 10200
                break;
            case 13000:
                changeImg = int(random(2,numImg));
                score = 13200
                break;
            case 16000:
                changeImg = int(random(2,numImg));
                score = 16200
                break;
            case 19000:
                changeImg = int(random(2,numImg));
                score = 19200
                break;
            case 21000:
                changeImg = int(random(2,numImg));
                score = 21200
                break;
            case 24000:
                changeImg = int(random(2,numImg));
                score = 24200
                break;
            case 27000:
                changeImg = int(random(2,numImg));
                score = 27200
                break;
            case 30000:
                changeImg = int(random(2,numImg));
                score = 30200
                break;
            case 350000:
                changeImg = int(random(2,numImg));
                score = 35200
                break;
            case 40000:
                changeImg = int(random(2,numImg));
                score = 40200
                break;
            case 45000:
                changeImg = int(random(2,numImg));
                score = 45200
                break;
            case 50000:
                changeImg = int(random(2,numImg));
                score = 50200
                break;
            case 55000:
                changeImg = int(random(2,numImg));
                score = 65200
                break;
            case 60000:
                changeImg = int(random(2,numImg));
                score = 65200
                break;
            case 65000:
                changeImg = int(random(2,numImg));
                score = 65200
                break;
            case 70000:
                changeImg = int(random(2,numImg));
                score = 70200
                break;
            case 75000:
                changeImg = int(random(2,numImg));
                score = 75200
                break;
            case 80000:
                changeImg = int(random(2,numImg));
                score = 80200
                break;
            case 85000:
                changeImg = int(random(2,numImg));
                score = 85200
                break;
            case 90000:
                changeImg = int(random(2,numImg));
                score = 90200
                break;
            case 95000:
                changeImg = int(random(2,numImg));
                score = 95200
                break;
            case 100000:
                changeImg = int(random(2,numImg));
                score = 100200
                break; 
            case 105000:
                changeImg = int(random(2,numImg));
                score = 105200
                break;  
            case 110000:
                changeImg = int(random(2,numImg));
                score = 110200
                break; 
            case 115000:
                changeImg = int(random(2,numImg));
                score = 115200
                break;  
            case 120000:
                changeImg = int(random(2,numImg));
                score = 120200
                break;
        } 
        
        //displays guitar 
        drawGuitar()
        drawButtons();
        
        //displays countdown
        push()
        noStroke()
        textAlign(CENTER);
        textSize(110);
        fill(255,255,255,countdownFill)
        text(countdown, width/2, height/2 - 100)
        if (mySong.currentTime() >= 0){
            countdown = 3
        }
        if (mySong.currentTime() >= 1){
            countdown = 2
        }
        if (mySong.currentTime() >= 2){
            countdown = 1
        }
        if (mySong.currentTime() >= 3){
            countdown = "GET READY"
        }

        if (mySong.currentTime() >= 4.5){
            countdownFill = 0
        }
        pop()
        
        //creates notes
        if (frameCount % speed === 0) {
            n.push(new Note(floor(random(1, 6))));
        }

        if (mySong.currentTime() >= 5){
            speed =50
        }
        
        if (mySong.currentTime() >= 17){
            speed =25
        }
        if (mySong.currentTime() >= 36.8){
            speed =15
        }

        if (mySong.currentTime() >= 47){
            speed =25
        }

        if (mySong.currentTime() >= 114){
            speed =15
        }

        if (mySong.currentTime() >= 139){
            speed =25
        }

        if (mySong.currentTime() >= 245){
            speed =0
        }

        if (mySong.currentTime() >= 250){
            retry(); 
        }

        //displays and moves notes
        for (let i = 0; i < n.length; i++) {
            n[i].display();
            n[i].move();
        }

        //removes notes when off screen
        for (let i = 0; i < n.length; i++) {
        if (n[i].y > windowHeight) {
            hit = true;
            n.splice(i, 1);
        }
        }

        //displays and fades hitboxes
        for (let i = 0; i < h.length; i++) {
            h[i].display();
            h[i].fade();
        }

        //removes hitboxes from array after faded
        for (let i = 0; i < h.length; i++) {
            if (h[i].f < 0) {
                h.splice(i, 1);
            }
        }
        
        textSize(45);
        push()
        noStroke();
        textAlign(RIGHT)
        fill(255,255,255);
        text("SCORE", width-50, 50);
        text(score, width-50, 100);
        pop()
    }

    //media query for smartphone
    if (width <= 576) {
        background(0)
        smartphone();
    }
}

//function for the main menu
function menu() {
    textAlign(CENTER);
    textSize(25);
    fill(255,255,255)
    text ("LORD KNOWS, YOU CAN'T CHANGE…", width/2, height/2)
    text ("BUT ARE YOU READY TO FLY HIGH?", width/2, height/2+30)
    rect(width/2, height/2+100, 400, 100);
    fill(0,0,0)
    textSize(70);
    text("START", width/2, height/2+125);

    //button 
    if (mouseX > width/2-200 && mouseX < width/2+200) {
        if (mouseY > height/2+50 && mouseY < height/2+150) {
            if (mouseIsPressed) {
                scr = "game";
                mySong.play()
                mouseX = 2000;
                frameCount = 0
               
            }
        }
    }
}
//function for the retry menu
function retry() {
   push()
    background(0)
    textAlign(CENTER);
    textSize(25);
    fill(255,255,255)
    text ("YOUR SCORE IS", width/2, height/2-75)
    textSize(120);
    text (score, width/2, height/2+35)
    textSize(25);
    text ("YOU'RE TRULY A FREE BIRD…", width/2, height/2+100)
    text ("BUT CAN YOU FLY HIGHER?", width/2, height/2+130)
    rect(width/2, height/2+200, 400, 100);
    fill(0,0,0)
    textSize(70);
    noStroke();
    text("RETRY", width/2, height/2+225);
  
    //button 
    if (mouseX > width/2-200 && mouseX < width/2+200) {
        if (mouseY > height/2+150 && mouseY < height/2+250) {
            if (mouseIsPressed) {
                scr = "game";
                mySong.play()
                score = 0
                mouseX = 2000;
               
            }
        }
    }
pop()
}

//function for the media query  
function smartphone() {
    textAlign(CENTER);
    fill(255,255,255)
    mySong.stop()
    textSize(120);
    text (":O",width/2, height/2+50)
    textSize(25);
    text ("YOU NEED SPACE AND A KEYBOARD", width/2, height/2+100)
    text ("TO FLY HIGH… TRY ON YOUR PC", width/2, height/2+130);
}

//draws the guitar in background
function drawGuitar(){
    push()
    fill(20,20,20);
    beginShape();
    vertex(width/2 - 130, height/2);
    vertex(width/2 + 130, height/2);
    vertex(width/2 + 310, height);
    vertex(width/2 - 310, height);
    endShape(CLOSE);
    stroke(255,255,255);
    strokeWeight(3);
    line(width/2-120, height/2,width/2 - 300, height)
    line(width/2+120, height/2,width/2 + 300, height)
    stroke (70,70,70)
    line(width/2, height/2,width/2, height)
    line(width/2 -40, height/2,width/2 - 100, height)
    line(width/2 -80, height/2,width/2 - 200, height)
    line(width/2 +40, height/2,width/2 + 100, height)
    line(width/2 +80, height/2,width/2 + 200, height)
    pop()
}

//draws the buttons
function drawButtons() {

    stroke(0);
    strokeWeight(5);
    fill(0, 170, 102);
    ellipse(width/2 - 200, windowHeight - 100, wtasto1, htasto1);
    fill(0, 0, 0);
    ellipse(width/2 - 200, windowHeight - 105, wtasto2, htasto2);

    fill(188, 38, 23);
    ellipse(width/2 - 100, windowHeight - 100, wtasto1, htasto1);
    fill(0, 0, 0);
    ellipse(width/2 - 100, windowHeight - 105, wtasto2, htasto2);

    fill(254, 221, 4);
    ellipse(width/2, windowHeight - 100, wtasto1, htasto1);
    fill(0, 0, 0);
    ellipse(width/2, windowHeight - 105, wtasto2, htasto2);

    fill(53, 83, 161);
    ellipse(width/2 + 100, windowHeight - 100, wtasto1, htasto1);
    fill(0, 0, 0);
    ellipse(width/2 + 100, windowHeight - 105, wtasto2, htasto2);

    fill(234, 86, 15);
    ellipse(width/2 + 200, windowHeight - 100, wtasto1, htasto1);
    fill(0, 0, 0);
    ellipse(width/2 + 200, windowHeight - 105, wtasto2, htasto2);

    fill(255);
    noStroke();
    text("A", width/2 - 200, windowHeight - 95);
    text("S", width/2 - 100, windowHeight - 95);
    text("D", width/2, windowHeight - 95);
    text("F", width/2 + 100, windowHeight - 95);
    text("G", width/2 + 200, windowHeight - 95);
    stroke(0);
}

//checks which key is pressed
function keyTyped() {
    if (key == "a") {
        checkDist(1);
    }
    else if (key == "A") {
        checkDist(1);
    }
    if (key == "s") {
        checkDist(2);
    }
    else if (key == "S") {
        checkDist(2);
    }
    if (key == "d") {
        checkDist(3);
    }
    else if (key == "D") {
        checkDist(3);
    }
    if (key == "f") {
        checkDist(4);
    }
    else if (key == "F") {
        checkDist(4);
    }
    if (key == "g") {
      checkDist(5);
  }
  else if (key == "G") {
    checkDist(5);
}
}

//note object
class Note {
    constructor(n) {
        switch (n) {
            case 1:
                this.x = width/2 - 200;
                break;
            case 2:
                this.x = width/2 - 100;
                break;
            case 3:
                this.x = width/2;
                break;
            case 4:
                this.x = width/2 + 100;
                break;
            case 5:
                this.x = width/2 + 200;
                break;
        }
        this.y = height/2;
        this.n = n;
    }
    
    display() {
        switch (this.n) {
            case 1:
              fill(0, 170, 102);
                break;
            case 2:
              fill(188, 38, 23);
                break;
            case 3:
              fill(254, 221, 4);
                break;
            case 4:
              fill(53, 83, 161);
                break;
            case 5:
              fill(234, 86, 15);
                  break;
        }
push()

        stroke (70,70,70)
        strokeWeight(3)
        line(width/2-this.y/2.75,this.y, width/2+this.y/2.75,this.y)
        if (guitar < 300){
            guitar = guitar +2}
        

        pop()
        ellipse(this.x, this.y, wtasto1, htasto1);
        fill(0,0,0)
        ellipse(this.x, this.y-10, 60, 30);
        fill('255')
        ellipse(this.x, this.y-20, 60, 30);
        
        
        
    }
// speed 
    move() {
        this.y += 5;
    }
}

//hitbox object
class Hit {
    constructor(n, y, c) {
        switch (n) {
            case 1:
                this.x = width/2 - 200;
                break;
            case 2:
                this.x = width/2 - 100;
                break;
            case 3:
                this.x = width/2;
                break;
            case 4:
                this.x = width/2 + 100;
                break;
            case 5:
                  this.x = width/2 + 200;
                  break;
        }

        this, (y = y);
        this.c = c;
        this.f = 255;
        this.w = wtasto1;
        this.h = htasto1;
    }

    display() {
        switch (this.c) {
            case "good":
                stroke(102, 255, 153, this.f);
                break;
        }
        noFill();
        strokeWeight(12);
        ellipse(this.x, windowHeight - 100, this.w, this.h, 20);
    }

    fade() {
        this.f -= 10;
        this.w += 0.5;
        this.h += 0.5;
    }
}

//checks how close each note is to the hitbox
function checkDist(num) {
    for (let i = 0; i < n.length; i++) {
        if (n[i].n == num) {

            if (abs(n[i].y - (windowHeight - 100)) < 50) {
                h.push(new Hit(num, n[i].y, "good"));
                score += 200;
                n.splice(i, 1);
                break;
            }

        }
    }
}

//function that resizes window
function windowResized(){
      resizeCanvas(windowWidth, windowHeight)
      wi = windowWidth / 2;
      he = windowHeight / 2;
}