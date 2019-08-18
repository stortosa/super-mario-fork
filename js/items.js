class Items {
  constructor(ctx, info, posY) {
    this.ctx = ctx
    this.info = info
    this.posY = posY

    // this.item = data.map((dat) => (dat.image));

    this.x = 150; //esto tendrá que empezar en negativo del canvasX e ir sumando con el tiempo(counter?)
    this.y = 150; //esta tendrá que variar en cada CLOUD 
    this.dx = 4;
    this.dy = 2;
    this.w = 340;
    this.h = 220;
    this.onMove = true

    this.imgItem = new Image();
    this.imgItem.src = this.info.image;

  }
  //methods
  draw() {
    this.y = this.posY
    this.ctx.drawImage(this.imgItem, this.x, this.y - 50, this.w / 2, this.h / 2);
    this.ctx.font = '48px serif';
    this.ctx.textAlign = "end"
    this.ctx.fillText(this.info.name, this.x - 20, this.y);
  }

  move() {
    if (this.onMove) {
      this.x += this.dx;
    }
    else {
      this.dy *= 1.05;
      this.posY += this.dy;
    }
  }

  autodestruccion() {
    this.onMove = false
    this.info.name = ""
    //this.imgItem
    //crea image(this.imgItem) y la hago caer

  }

}