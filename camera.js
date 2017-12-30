var graphics ;
var vw = window.innerWidth;
var vh = window.innerHeight;
var mundox;
var mundoy;
var theplot=[];
var  editex;
var ox=0;
var oy=0;
var indice=0;
var text_nux=[];
var text_nuxn=[];
var text_nuy=[];
var text_nuyn=[];
var mirtensparente;
var mir;

 var unidadmedida=60;
 var cuantaslineas=20;

        var IDE_HOOK = false;
        var VERSION = '2.6.2';

        
var game = new Phaser.Game(vw,vh, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
 game.load.image('mirtensparente', 'mirtensparente.png');
    game.load.image('mirtensparentedos', 'mirtensparentedos.png');

     game.load.spritesheet('mir', 'mir.png',60, 60, 3);
 
  game.load.image('fon', 'fon.png');
      game.load.image('player','phaser-dude.png');
    cargaimaeditext();
}

var player;
var pstatico;
var cursors;

function create() {

   //game.add.tileSprite(0, 0, 1920, 1920, 'background');

    game.world.setBounds(0, 0, 5000, 5000);
    mundox=game.world.centerX*2;
    mundoy=game.world.centerY*2;


    game.physics.startSystem(Phaser.Physics.ARCADE);




  fon=game.add.sprite(0,0, 'fon');
  fon.anchor.setTo(0.5, 0.5);
 // if(vw<670){ fon.scale.set(0.0022580645*vw+0.5612903226)}
  fon.scale.set(0.004*vw);
  fon.width;
  fon.x=mundox/2;
   fon.y=mundoy/2;
game.physics.enable(fon, Phaser.Physics.ARCADE);

    game.physics.arcade.gravity.y = 0;







  mir = game.add.sprite(0, 0, 'mir');
   
    mir.anchor.setTo(0.5, 0.5);
 game.physics.enable(mir, Phaser.Physics.ARCADE);
mir.body.allowRotation = false;


mir.animations.add('miraniid', [0, 1, 2 ]);
   mir.animations.play('miraniid', 20, true);



 pstatico = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
pstatico.anchor.setTo(0.5, 0.5);
    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
  player.anchor.setTo(0.5, 0.5);
   game.physics.enable(player, Phaser.Physics.ARCADE);
   
    player.body.allowRotation = false;
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    
graphics =game.add.graphics(0, 0);

    graphics.beginFill(0x027a71);
    graphics.lineStyle(4, 0x02fdeb, 0.6);
    
    graphics.moveTo(mundox/2, 0);
    graphics.lineTo(mundox/2,mundoy);
    graphics.moveTo(0,mundoy/2);
    graphics.lineTo(mundox,mundoy/2);
    
   

var p1x=mundox/2;
var p1y=0;
var p2x=mundox/2;
var p2y=mundoy/2;



var  style={ font: "bold "+String(vw*0.04)+"px Arial", fill: "#B21437", boundsAlignH: "center", boundsAlignV: "middle" };
   editex= new  Editext(game,vw,vh,style);


 //game.camera.follow(fon, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


  bmd = game.make.bitmapData(mundox, mundoy);
    bmd.addToWorld();
      bmdf1 = game.make.bitmapData(mundox, mundoy);
    bmdf1.addToWorld();

      bmdf2 = game.make.bitmapData(mundox, mundoy);
    bmdf2.addToWorld();
      bmdf3 = game.make.bitmapData(mundox, mundoy);
    bmdf3.addToWorld();

editex.update();

editex.fijaracambasico(true);
editex.visibletrigono(true);





}

function update() {
  fon.rotation += 0.005;

}

function render() {
   game.debug.spriteInfo(fon, 32, 32);

    game.debug.text("ESOTAM", 32, 32);

}
     












function act_btngraf(){var textoecua0="";


  editex.visiblebasico(false);
if(editex.booltexto_f3){

 
textoecua=editex.valortexto_f3;

bmdf3.clear();




theplot=[];
theplot.push(new Fooplot(document.getElementById('theplot')));




theplot[0].addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});

  
   theplot[0].reDraw();
  colorf3='#F32D09';
    ecuacion(bmdf3,colorf3);


}
if(editex.booltexto_f2){
textoecua=editex.valortexto_f2;


bmdf2.clear();




theplot=[];
theplot.push(new Fooplot(document.getElementById('theplot')));




theplot[0].addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});

   theplot[0].xmin=-10;

   theplot[0].xmax=10;
   theplot[0].reDraw();
  colorf2='#E9FA05';
    ecuacion(bmdf2,colorf2);
}
if(editex.booltexto_f1){
textoecua=editex.valortexto_f1;



bmdf1.clear();




theplot=[];
theplot.push(new Fooplot(document.getElementById('theplot')));




theplot[0].addPlot(String(textoecua),FOOPLOT_TYPE_FUNCTION,{'color':$(this).find('.data-color').val()});

   theplot[0].xmin=-20;

   theplot[0].xmax=-10;
   theplot[0].reDraw();
  colorf1='#FA05AE';
    ecuacion(bmdf1,colorf1);




}

 

}





function ecuacion (bmdobj,colr){
var cc=0;

var  arrayl=[]; 

arrayl=[];
//arrayl.pop();



for(var i=1; i<fy1.length;i=i+1){

 arrayl.push(new Phaser.Point(fx1[i],fy1[i]));
}


if(editex.booltexto_minmax){
var indicefy1=0;
indicefy1=fy1.length/2;
ox=Math.round(fx1[indicefy1]);
 oy=Math.round(fy1[indicefy1]);
 console.log(ox+"  "+oy);
//cambiartextx();
}



var  n1=0;
var n2=0;
var f=unidadmedida;
var ct=0;
for(var i=1; i<arrayl.length;i=i+1){
  ct=ct;
  n1=ct;
  n2=ct+1;
 


bmdobj.line(mundox/2+(arrayl[n1].x-ox)*f,mundoy/2-(arrayl[n1].y-oy)*f,
  mundox/2+(arrayl[n2].x-ox)*f,mundoy/2 -(arrayl[n2].y-oy)*f,colr, 7);
ct=ct+1;

}



fy1=[];
fx1=[];


}



      function btflechad_phaser(visi){
editex.visiblebasico(visi);
editex.visibletrigono(!visi);
//editex.visiblebasico(false);
      }







