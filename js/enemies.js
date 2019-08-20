//creando el protagonista

class Enemy {
  constructor(ctx, x, y, enemySpeed, wCanvas, framesCounter) {  //keys
    this.x = x
    this.y = y
    this.ctx = ctx;
    this.wCanvas = wCanvas;
    this.framesCounter = framesCounter
    this.enemyW = 148;
    this.enemyH = 100;
    this.x0 = 30 // para avanzar el muñeco en pixeles
    this.posY = 500;
    this.cFrame = 0;
    this.gravity = 0.4;
    this.enemySpeed = enemySpeed;

    //imagen del gorila:
    this.imgEnemy = new Image();
    this.imgEnemy.src = "img/gorila.png";

    // número de imágenes diferentes
    this.imgEnemy.frames = 5;
    this.imgEnemy.frameIndex = 0;

    this.vel0 = 0;
    this.velY = this.vel0;

    // this.velJump = 10;


    this.frameWidthTotal = 740;
    // this.frameWidth = this.frameWidthTotal / 5;
    this.frameHeightTotal = 100;

  }

  move() {
    this.x -= 15
    if(this.x < 0){
      this.x = 1000
    }
  }

  draw() {
    
    this.ctx.drawImage(
      this.imgEnemy,
      this.imgEnemy.frameIndex * Math.floor(this.imgEnemy.width / this.imgEnemy.frames), //this.cFrame,,
      0,
      148,//100,
      100,//100,
      this.x, //donde ponerlo inicio (x, y)
      this.y -20,
      100,
      100
    )
    this.animateImgEnemy()
  }

  animateImgEnemy() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.framesCounter % 7 === 0) {
      this.imgEnemy.frameIndex += 1;
      // Si el frame es el último, se vuelve al primero
      if (this.imgEnemy.frameIndex > 4) this.imgEnemy.frameIndex = 0;
    }
  }
}