
//https://www.youtube.com/watch?v=WIizj4rAFZY

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
     

















