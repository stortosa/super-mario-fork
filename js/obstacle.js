class Obstacle {
  constructor(w,playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 15; //
    this.h = this.w * 3;
    this.enemyW = 100;
    this.enemyH = 80;
    // this.enemyW = 130;
    // this.enemyH = 90;
    // this.framesCounter = framesCounter
    this.dx = 12;
    this.x = w;
    this.y = playerY + playerH - this.h - 5;
    this.posY = 500
    
    //imagen del gorila:
    this.imgEnemy = new Image();
    this.imgEnemy.src = "img/totemGorila2.png";
    // this.imgEnemy.src = "img/totemGorila.png";
    // this.imgEnemy.src = "img/gorila.png";

    // número de imágenes diferentes
    this.imgEnemy.frames = 5;
    this.imgEnemy.frameIndex = 0;
    
    this.frameWidthTotal = 740;
    this.frameHeightTotal = 100;
  }

  draw() {

    this.ctx.drawImage(
      this.imgEnemy,
      this.x, //donde ponerlo inicio (x, y)
      this.y -30,
      60,
      80
    )
  }

  // move() {
  //   this.x -= this.dx;
  // }

  //prueba de movimiento in situ:
  // draw(framesCounter) {

  //   this.ctx.drawImage(
  //     this.imgEnemy,
  //     this.imgEnemy.frameIndex * Math.floor(this.imgEnemy.width / this.imgEnemy.frames), //this.cFrame,,
  //     0,
  //     148,//100,
  //     100,//100,
  //     this.x, //donde ponerlo inicio (x, y)
  //     this.y -40,
  //     100,
  //     100
  //   )
  //   // console.log(this.imgEnemy)

  //   this.animateImgEnemy(framesCounter)
  // }

  // animateImgEnemy(framesCounter) {
  //   // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  //   console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
  //   if (framesCounter % 5 === 0) {
  //     this.imgEnemy.frameIndex += 1;
  //     console.log("XXXXXXXXXXXXXXXXX")

  //     // Si el frame es el último, se vuelve al primero
  //     if (this.imgEnemy.frameIndex > 4) this.imgEnemy.frameIndex = 0;
  //     console.log("UUUUUUUUUUUUUU")
  //   }
  // }

  move() {
    this.x -= this.dx;
  }
}