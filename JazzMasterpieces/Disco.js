function Disco (x, y, l, a, t, score, path, p) {
  this.pos_x = int(x);
  this.pos_y = int(y);
  this.label = l;
  this.artista = a;
  this.titolo = t;
  this.rym = score;
  this.cover = loadImage(path);
  this.acceso = 1;
  this.numero = p;


this.display_small = function () {
  image(this.cover,this.pos_x, this.pos_y ,spaziatura * 0.9 * _scala,spaziatura * 0.9 * _scala);
};

this.display_big = function ( x,  y){
  image(this.cover,x,y,height * 0.15,height * 0.15);
};


this.accendi = function (){
  noFill();
  stroke(255,255,0);
  strokeWeight(3);
  rect(this.pos_x, this.pos_y, spaziatura * 0.9 * _scala, spaziatura * 0.9 * _scala);
};

this.accendirosa = function (){
  noFill();
  stroke(255,102,178);
  strokeWeight(3);
  rect(this.pos_x, this.pos_y, spaziatura * 0.9 * _scala, spaziatura * 0.9 * _scala);
};

this.spegni = function (){
  fill(0,230);
  noStroke();
  //stroke(255,0,0);
  //strokeWeight(5);
  rect(this.pos_x, this.pos_y, spaziatura * 0.9 * _scala, spaziatura * 0.9 * _scala);
};

this.controlla_artista = function (a_){
  if (this.artista == a_) {
      this.ACCESO = 1;
    } else {
      this.ACCESO = 0;
    }
};

this.mouseOver = function (){
  if ((mouseX > this.pos_x) && (mouseX < this.pos_x + spaziatura * 0.9 * _scala) && (mouseY > this.pos_y) && (mouseY < this.pos_y + spaziatura * 0.9 * _scala)) {
      return (true);
    } else {
      return (false);
    }
};

}
