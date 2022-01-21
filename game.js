class Game{
    constructor(){
        this.app = null;
        this.gameContainer = new PIXI.Container();
        this.gameBoard = new GameBoard(this);
        this.plane = new Plane(this);
        this.alien = new Alien(this);
        this.bossAlien = new BossAlien(this);
        this.aliens = [];
        this.frame = 0;
        this.fireBulletPlaneInterval = null;
        this.showAlienInterval = null;
        this.bossFireInterval = null;
        this.audioPlayGame = new Howl({
            src : ["assets/audioPlayGame.mp3"]
        }) 
        this.audioFireBullet = new Howl({
            src : ["assets/fire.mp3"]
        }) 
        this.init();
        this.gameStartScene();
        this.drawGameBoard();
    }
    init(){
        this.app = new PIXI.Application({
            width : 300,
            height : 600,
        }); 
        this.app.view.style.border = "solid 1px white";
        document.body.appendChild(this.app.view);
        this.app.stage.addChild(this.gameContainer);

    }
    gameStartScene(){
        this.gameStartScene = new GameStartScene(this);
    }
    drawGameBoard(){
        //background
        this.gameBoard.drawBackground();
        this.app.ticker.add(() =>{
            this.gameBoard.updateBackground();
        });
        //score
        this.gameBoard.drawScores();
    }
    gamePlayScene(){
        this.audioPlayGame.play();
        //move plane
        this.plane.move();
        this.fireBulletPlaneInterval = setInterval(() =>{
            this.frame ++;
            //fire bullet plane
            this.plane.fireBullet();
            this.audioFireBullet.play();
           
        },300);
        this.showAlienInterval = setInterval(() =>{
            this.aliens.push(new Alien(this));
            this.aliens.forEach(alien =>{
                
                alien.draw();
                alien.fireBullet();   
            });
        },1500)
    }
    stopFireBulletPlane(){
        clearInterval(this.fireBulletPlaneInterval);
    }
    stopShowAlien(){
        clearInterval(this.showAlienInterval);
    }
    collision(first, second){
        if(first.x > second.x - 25 && first.x < second.x -25 + second.width &&
            first.y > second.y - 25 && first.y < second.y - 25 + second.height){
                return true;
            }
    }
    collisionBoss(first, second){
        if(first.x > second.x - 50 && first.x < second.x -50 + second.width &&
            first.y > second.y && first.y < second.y  + second.height - 20){
                return true;
            }
    }
}

var g = new Game();