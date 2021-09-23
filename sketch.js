var player, target, obs1, obs2, edges;
var snake;

function setup()
 {
  createCanvas(600, 600);


// create wall outside the canvas(Box)

  edges = createEdgeSprites();


// Create the Characters

  player = createSprite(50, 550, 30, 30);

  target = createSprite(550, 50, 30, 30);

  obs1 = createSprites(300, 150, 100, 20);

  obs2 = createSprites(300, 350, 100, 20);

  snake = createSprite(300, 250, 150, 10);

// Obstacles to move left and right
  obs1.velocityX = 5;
  obs2.velocityX = -5;
  snake.velocityX = 10;
  snake.velocityX = -10;

// Change the colors of Characters
  player.shapeColor = "pink";

  obs1.shapeColor = "red";

  obs2.shapeColor = "red";

  target.shapeColor = "orange";

  snake.shapeColor = "yellow";
}



function draw()
 {
  background("green");


// Add movement into Player


    if (keyDown("up"))
 {

    player.y = player.y - 5;

  }

    if (keyDown("down"))
 {

    player.y = player.y + 5;
 }

    if (keyDown("left"))
 {

    player.x = player.x - 5;

 }

    if (keyDown("right"))
 {

    player.x = player.x + 5;
 }


 
// will stop player and obstacles to move outside the wall

    player.bounceOff(edges[0]);

    player.bounceOff(edges[1]);

    player.bounceOff(edges[2]);

    player.bounceOff(edges[3]);


    obs1.bounceOff(edges[0]);

    obs1.bounceOff(edges[1]);

    obs2.bounceOff(edges[0]);

    obs2.bounceOff(edges[1]);

    snake.bounceOff(edges[0]);

    snake.bounceOff(edges[1]);


  if (player.isTouching(obs1))
 {

    obs1.velocityX = 0;

    textSize(50);

    fill("lightgreen");
    text("YOU LOOSE", 150, 260);

 }


  if (player.isTouching(obs2))
 {

    obs2.velocityX = 0;

    textSize(50);

    fill("lightgreen");

    text("YOU LOOSE", 150, 260);

 }


  if (player.isTouching(target))
 {


    textSize(50);

    fill("yellow");

    text("YOU WON", 200, 250);

 }


 if (player.isTouching(snake))
 {

    snake.velocityX = 0;

    textSize(50);

    fill("lightgreen");
    text("YOU LOOSE", 150, 260);

 }
  drawSprites();

}