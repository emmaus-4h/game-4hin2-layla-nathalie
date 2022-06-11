  /* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var aantal = 0;
const SPELEN = 1;
const GAMEOVER = 2;
const GAMEWON = 3;
var spelStatus = SPELEN;
const UITLEG = 8;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_UP = 38;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 350; // x-positie van vijand
var vijandY = 200; // y-positie van vijand

var vijand2X = 540; 
var vijand2Y = 200;

var vijand3X = 730;
var vijand3Y = 200;

var vijand4X = 920;
var vijand4Y = 200;

var kogelX = 590; 
var kogelY = 590;

var img; //plaatje speler
var img2; //plaatje vijand

var punten = 0;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (keyIsDown (KEY_RIGHT) && spelerX < 1280) {
  spelerX = spelerX + 3;
}
  if (keyIsDown (KEY_LEFT) && spelerX > 0) {
  spelerX = spelerX - 3;
}
  if (keyIsDown (KEY_UP) && spelerY > 0) {
  spelerY = spelerY - 3;
}
  if (keyIsDown (KEY_DOWN) && spelerY < 720) {
  spelerY = spelerY + 3;
}

  // vijand
  // kogel
  if(kogelY > -30) {
    kogelY = kogelY - 3;   
  }
  if(keyIsDown (32)){
    kogelY = spelerY; 
    kogelX = spelerX;  
  }
   // punten
  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  
    
  // botsing kogel tegen vijand
  if (kogelX - vijandX < 35 && 
      kogelX - vijandX > -35 &&
      kogelY - vijandY < 35 &&
      kogelY - vijandY > -35) {
    console.log("botsingmetkogel")
    vijandY = vijandY - 400;
    punten = punten + 1;
  }

  if (kogelX - vijand2X < 35 && 
      kogelX - vijand2X > -35 &&
      kogelY - vijand2Y < 35 &&
      kogelY - vijand2Y > -35) {
    console.log("botsingmetkogel")
    vijand2Y = vijand2Y - 400;
    punten = punten + 1; 
  }

  if (kogelX - vijand3X < 35 && 
      kogelX - vijand3X > -35 &&
      kogelY - vijand3Y < 35 &&
      kogelY - vijand3Y > -35) {
    console.log("botsingmetkogel")
    vijand3Y = vijand3Y - 400;
    punten = punten + 1;
  }

  if (kogelX - vijand4X < 35 && 
      kogelX - vijand4X > -35 &&
      kogelY - vijand4Y < 35 &&
      kogelY - vijand4Y > -35) {
    console.log("botsingmetkogel")
    vijand4Y = vijand4Y - 400;
    punten = punten + 1;
  }

  // update punten en health

};

//vijanden terug zetten
var reset = function () {  
  vijandY = 200;
  vijand2Y = 200;   
  vijand3Y = 200;
  vijand4Y = 200; 
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("blue");
  rect(0, 0, 1280, 720);
  
  // vijand1
  /** console.log("voor while: vijandX = "+vijandX);
  class vijand {
    constructor(x, y, image) {
      this.x = x;
      this.y = y;
      this.image = image;
    }
    draw() {
      image(img2, this.x, this.y, 200, 200);
    }
    botsing() {
      if (kogelX - this.x < 35 && 
          kogelX - this.x > -35 &&
          kogelY - this.y < 35 &&
          kogelY - this.y > -35) {
        console.log("botsingmetkogel")
        this.y = this.y - 400;
        punten = punten + 1;
      }
    }
  }
  console.log("na while: vijandX = "+vijandX);
  let v1 = new vijand(100,100,img2);
  console.log(v1.draw())
  console.log(v1.botsing())*/
 
  var tekenVijand = function () {
    fill("black")
    ellipse(vijandX, vijandY, 10, 10);
    image(img2, vijandX - 100, vijandY - 85, 200, 200);
  }
  // vijand2
  var tekenVijand2 = function (){
    fill("black")
    ellipse(vijand2X, vijand2Y, 10, 10); 
    image(img2, vijand2X - 100, vijand2Y - 85, 200, 200); 
  }

  //vijand3
  var tekenVijand3 = function (){
   fill("black")
   ellipse(vijand3X, vijand3Y, 10, 10);  
   image(img2, vijand3X - 100, vijand3Y - 85, 200, 200);
  
 }  
  
  //vijand4
  var tekenVijand4 = function (){
   fill("black")
   ellipse(vijand4X, vijand4Y, 10, 10);  
   image(img2, vijand4X - 100, vijand4Y - 85, 200, 200);
 }

  console.log("voor while: vijandX = "+vijandX);
  /* deze code hadden we eerst,
 meneer van Geest vond die heel mooi en heeft daarom gezegd dat we hem in commentaar mochten laten staan, ook al was hij niet goed
  while (vijandX < 1000) {
    vijandY = 100;
    while ( vijandY < 200){
     tekenVijand (vijandX, vijandY);
      vijandY = vijandY + 100;
   };
    vijandX = vijandX + 100;
  };
*/
  
  var rij1 =[1, 1, 1, 1];
  var rij2 =[1, 1, 1, 1];
  var rij3 =[1, 1, 1, 1];
  var rij4 =[1, 1, 1, 1];
  for (var x = 0; x < rij1.length; x++) { 
    tekenVijand(rij1[x], x, 0);
    tekenVijand2(rij2[x], x, 1);
    tekenVijand3(rij3[x], x, 2);
    tekenVijand4(rij4[x], x, 3);  
  }
  console.log("na while: vijandX = "+vijandX);
  
  // kogel
  fill("white");
  rect(kogelX, kogelY, 15, 30);
  
  // speler
    fill("black");
   ellipse(spelerX, spelerY, 10, 10);
   image(img, spelerX - 75, spelerY - 80 , 150 , 150);

  // punten en health
 fill("yellow");
  textSize(40);
  text(punten, 100, 100);

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerX - vijandX < 50 && 
      spelerX - vijandX > -50 &&
      spelerY - vijandY < 50 &&
      spelerY - vijandY > -50) {
    console.log("botsing")
    spelStatus = GAMEOVER;
    aantal = aantal + 1;
    console.log("botsing "+ aantal)
    return true; 
  }
  if (spelerX - vijand2X < 50 && 
      spelerX - vijand2X > -50 &&
      spelerY - vijand2Y < 50 &&
      spelerY - vijand2Y > -50) {
    console.log("botsing")
    spelStatus = GAMEOVER;
    aantal = aantal + 1;
    console.log("botsing "+ aantal)
    return true; 
  }
  if (spelerX - vijand3X < 50 && 
      spelerX - vijand3X > -50 &&
      spelerY - vijand3Y < 50 &&
      spelerY - vijand3Y > -50) {
    console.log("botsing")
    spelStatus = GAMEOVER;
    aantal = aantal + 1;
    console.log("botsing "+ aantal)
    return true; 
  }
  if (spelerX - vijand4X < 50 && 
      spelerX - vijand4X > -50 &&
      spelerY - vijand4Y < 50 &&
      spelerY - vijand4Y > -50) {
    console.log("botsing")
    spelStatus = GAMEOVER;
    aantal = aantal + 1;
    console.log("botsing "+ aantal)
    return true; 
  }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

var checkGameWon = function () {
  if (punten == 4) {
    console.log("gewonnen")
    spelstatus = GAMEOVER;
    return true;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * preload
 * deze functie wordt 1x uitgevoerd voor setup
 * we laden hier de plaatjes
 */
function preload() {
  img = loadImage('spacecraft.png');
  img2 = loadImage('vijand.png');
}

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    if (checkGameWon()) {
      spelStatus = GAMEWON;
    }
    console.log("spelen");
  }
  // teken game-over scherm
  if (spelStatus === GAMEOVER) {
    console.log("game over");
    textSize(50);
    fill("black");
    text("game over, druk op enter voor uitleg", 250, 350);
    if (keyIsDown(13)){    //enter
     spelStatus = UITLEG;
    }
  }

   if (spelStatus === GAMEWON) {
    console.log("game won");
    textSize(50);
    fill("black");
    text("game won, \ndruk op spatie om opnieuw te beginnen", 250, 350);
    if (keyIsDown(32)){    //spatie
     spelerX = 600;
     spelerY = 600;
     punten = 0;
     reset();
     spelStatus = SPELEN;
    }
  }
  

  // teken uitleg-over scherm   
  if (spelStatus === UITLEG) {
    console.log("uitleg");
   textSize(30);
    fill("yellow")
    rect(0,0, 1280, 720);
   fill("black");
   text("uitleg: Probeer alle vijanden te raken met de kogel.\n Om je karakter te  bewegen gebruik de pijl toetsen.\n Door spatie te krijg je je kogel terug en door spatie los te laten schiet je hem af.\n Druk nu op spatie om opnieuw te beginnen", 200, 250);
       
    
      if (keyIsDown(32)){//spatie
        spelerX = 600;
        spelerY = 600;
        punten = 0;
        reset();
        spelStatus = SPELEN;
      }
     
     
}
  
}


