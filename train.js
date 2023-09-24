class Train {
  constructor() {
    this.r = 60;
    this.x = width;
    this.y = height - this.r;
  }
  move() {
    this.x -= 10;
  }
  show() {
    //ellipseMode(CORNER);
    image(tImg, this.x, this.y, this.r, this.r);
    fill(255, 50);
    //ellipse(this.x,this.y,this.r,this.r);

  }
}
