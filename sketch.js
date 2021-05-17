var d = [];
var album;
var spaziatura;
var record;
var _scala = 0.9;

function preload(){
  album = loadTable('data/album.txt', 'tsv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  spaziatura = (width * 0.94 - 20) / 26;
  d = [];

  record = album.getRowCount()

  for(var i=0;i < record; i++){
    d[i] = new Disco( width * 0.03 + album.getNum(i,0) * spaziatura,
                      height * 0.1 + album.getNum(i,1) * spaziatura * _scala,
                      album.get(i,2),
                      album.get(i,3),
                      album.get(i,4),
                      album.getNum(i,5),
                      "data/"+album.get(i,6)
                      );
  }

}


function draw() {

  background(204);
  fill(0);
  
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(32);
  text("Jazz Masterpieces", width * 0.03, height * 0.05);

  for(var anno = 1954; anno < 1980; anno++ ){
    var x = anno - 1954;
    strokeWeight(1);
    stroke(255);
    textAlign(LEFT);
    textSize(14);
    text(anno, width * 0.03 + x*spaziatura ,height * 0.09);
    strokeWeight(1);
    stroke(255);
    line(width * 0.03 + x*spaziatura, height * 0.1, width * 0.03 + x*spaziatura, height * 0.80);
  }
  for(var i = 0; i < d.length; i++){
      d[i].display_small();
  }

  for(var i = 0; i < d.length; i++){

    if (d[i].mouseOver()) {
      var k = 0; 
      d[i].display_big(10,height * 0.825);
      fill(0);
      textAlign(LEFT);
      let A = d[i].artista;
      text(A           ,              30 + height * 0.15,  height*0.90);
      text(d[i].titolo.toUpperCase(), 30 + height * 0.15,  height*0.93);
      text(d[i].label,                30 + height * 0.15,  height*0.95);
      
      for (var s = 0; s < d.length; s++){
        print(s);
        d[s].controlla_artista(A);
        if(d[s].ACCESO == 1){
          d[s].accendi();
          //stroke(255);
          //strokeWeight(1);
          //if ( s == i ){
          //  stroke(0);
          //}
          //var m = map (d[s].rym, 0 , 500, 50 , 200);
          //rect(699 + k * 70, height - m - 20, 51, m);
          //var score = float(d[s].rym) / 100;
          //text(nf(score,0,2), 700 + k * 70, height - m - 30);
          
          //d[s].display_small(700 + k * spaziatura, height - spaziatura - 10);
                  
          //k++;
        } 
        if(d[s].ACCESO == 0){ 
          d[s].spegni();
        }
      }
    }

  }
}
