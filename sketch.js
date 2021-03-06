var ball,ballPosition,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database.ref("ball/position").on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref("ball/position").set({
       x:ballPosition.x+x,
       y:ballPosition.y+y
    })
}

function readPosition(data){
ballPosition=data.val();
ball.x=ballPosition.x;
ball.y=ballPosition.y;
}
