var d = [];
var t = [];
var album;
var taglist;
var matrix;
var spaziatura;
var record;
var _scala = 0.9;
var M = 0;

function preload(){
  album   = loadTable('data/album.txt', 'tsv', 'header');
  taglist = loadTable('data/tag.txt', 'tsv');
  matrix  = loadTable('data/matrix.txt', 'tsv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  spaziatura = (width * 0.94 - 20) / 41;

  record = album.getRowCount()
  d = [];
  for(var i=0;i < record; i++){
    d[i] = new Disco( width * 0.03 + album.getNum(i,0) * spaziatura,
                      height * 0.1 + album.getNum(i,1) * spaziatura * _scala,
                      album.get(i,2),
                      album.get(i,3),
                      album.get(i,4),
                      album.getNum(i,5),
                      "data/"+album.get(i,6),
                      album.get(i,7)
                      );
  }
  
  t = [];
  for(var i=0;i < taglist.getRowCount(); i++){
     t[i] = new Tag(taglist.get(i,0), taglist.get(i,1));    
  }

}


function draw() {

  M = 0;
  var h = ((height * 0.07) - (spaziatura * 0.9)) * 0.5;

  background(204);
  fill(0);
  
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT, BOTTOM);
  textSize(floor(height/32));
  text("Masterpieces of Italian Pop: 1966 to 1979", width + 10, height * 0.05);

  textAlign(RIGHT, BOTTOM);
  textSize(floor(height/75));
  text("Based on RateYourMusic.com charts", width - 10, height * 0.05);

  for(var anno = 1966; anno < 1980; anno++ ){
    var x = anno - 1966;
    strokeWeight(1);
    stroke(255);
    textAlign(LEFT);
    textSize(floor(height/64));
    text(anno, width * 0.03 + x * spaziatura * 3,height * 0.09);
    strokeWeight(1);
    stroke(255);
    line( width * 0.03 + 3* x *spaziatura, height * 0.1, width * 0.03 + 3 * x * spaziatura, height * 0.80);
  }
  for(var i = 0; i < d.length; i++){
      d[i].display_small();
  }


  //POSIZIONA I TAG
  var t_x = width * 0.33 - 110;
  var t_y = height * 0.85;

  for(var i=0;i < t.length; i++){
    t_x = t_x + 110;
    if (t_x > (width * 0.95)){
      t_x = width * 0.33;
      t_y = t_y + 40;
    }
    t[i].posizione(t_x, t_y);
  }



// GIRO SUGLI ALBUM
  for(var i = 0; i < d.length; i++){

    if (d[i].mouseOver()) {

      M = 1;

      var k = 0; 
      d[i].display_big(10,height * 0.825);
      fill(0);
      textAlign(LEFT);
      textSize(floor(height/64));
      let A = d[i].artista;
      text(A,                         30 + height * 0.15,  height*0.90);
      text(d[i].titolo.toUpperCase(), 30 + height * 0.15,  height*0.93);
      text(d[i].label,                30 + height * 0.15,  height*0.95);
      
      for (var s = 0; s < d.length; s++){
        //print(s);
        d[s].controlla_artista(A);
        if(d[s].ACCESO == 1){
          d[s].accendi();
        } 
        if(d[s].ACCESO == 0){ 
          d[s].spegni();
        }
      }

      d[i].display_mid(d[i].pos_x - h, d[i].pos_y - h);

      for(var j = 0; j < t.length; j++){
        t[j].acceso = matrix.get(d[i].numero, j + 1);
      }

    }

  }



//print(M);

// GIRO SUI TAG

for(var i=0;i < t.length; i++){
  
  if (M == 0){
    if(t[i].mouseOver()){
      t[i].acceso = 1;
    } else {
      t[i].acceso = 0;
    }
  }

  t[i].display();

}



for(var i=0;i < t.length; i++){
  if(t[i].mouseOver()){

        for(var j = 0; j < d.length; j++){
            
          d[j].ACCESO = matrix.get(d[j].numero, t[i].numero);

            if(d[j].ACCESO == 1){
              d[j].accendirosa();
            } 
            if(d[j].ACCESO == 0){ 
              d[j].spegni();
        }

      }

     
   }
  }
}
