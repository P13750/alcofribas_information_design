function Tag (_t, _n) {
    this.label = _t;
    this.pos_x = 0;
    this.pos_y = 0;
    this.acceso = 1;
    this.numero = _n;
  
  this.display = function () {
    textAlign(LEFT, CENTER);
    textSize(12);
    if (this.acceso == 1){
        fill(255,153,204);
    }else{
        fill(110,110,110);
    }
    strokeWeight(1);
    stroke(255);
    rect(this.pos_x, this.pos_y, 100, 30);
    fill(0);
    noStroke();
    text(this.label, this.pos_x, this.pos_y, 100, 30);
  };

  this.posizione = function (t_x, t_y) {
    this.pos_x = t_x;
    this.pos_y = t_y;
  };

  this.mouseOver = function (){
    if ((mouseX > this.pos_x) && (mouseX < this.pos_x + 100) && (mouseY > this.pos_y) && (mouseY < this.pos_y + 30)) {
        return (true);
      } else {
        return (false);
      }
  };



}