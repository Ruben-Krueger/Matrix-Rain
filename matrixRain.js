var maxCharactersInStream = 40;
var minCharactersInStream = 10;
var streams = [];
var maxTextSize = 20;
var minTextSize = 8;
var minChineseCharacter = 11904;
var maxChineseCharacter = 12019;
var maxStreams = 50;
var maxSpeed = 20;
var minSpeed = 4;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  createCharacterStreams();
  frameRate(20);
}

function draw() {
  clear();
  background(0);
  updateCharacterStreams();
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCharacterStreams() {
  for(var i = 0; i < maxStreams; i ++ ){
    var randomStreamLength = randomNumber(minCharactersInStream, maxCharactersInStream);
    var randomX = randomNumber(0, window.innerWidth);
    var randomY = randomNumber(0, window.innerHeight);
    var randomTextSize = randomNumber(minTextSize, maxTextSize);
    var randomSpeed = randomNumber(minSpeed, maxSpeed);
    var stream = new Stream(randomX, randomY, randomStreamLength, randomTextSize, randomSpeed);
    streams.push(stream);
  }
}

function updateCharacterStreams() {
    for(var i = 0; i < streams.length; i ++ ){
     streams[i].draw();
     streams[i].update();
  }
}



function Stream(x, y, numberOfCharacters, textsize, speed) {
  this.x = x;
  this.y = y;
  
  this.draw = function() {
    for(var i = 0; i < numberOfCharacters; i ++) {
        var randomInt = randomNumber(minChineseCharacter, maxChineseCharacter);
        var character =  String.fromCharCode(randomInt);
        textSize(textsize);
        fill(0, 255, 0);
        text(character, x, y - i * textsize);
    }
  }
  
  this.update = function() {
    if(y - numberOfCharacters * textsize > window.innerHeight) {
      y = 0;
    }
    else {
      y += speed;
  }
  }
}

