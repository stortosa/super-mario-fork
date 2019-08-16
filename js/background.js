//esta función mantiene el fondo del juego
class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.img = new Image();
    this.img.src = "img/backgroundFinal.png";
    this.h = h
    this.w = w

    this.x = 0;
    this.y = 0;

    this.dx = 10;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y - 300,
      10000,
      this.h + 300
    )
  }
    moveLeft() {
      this.x -= this.dx;
    }

    moveRight() {
      this.x += this.dx;

      if (this.x > 0) {
        this.x = 0
      }
    }

    move(){
      this.x -= this.dx;
    }
  }
