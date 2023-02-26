import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('background', 'assets/background.jpg');
    //Used texture packer to create multiple texture atlases/sprite sheets
    this.load.multiatlas('breakout', 'assets/breakout.json', 'assets');


  }

  create() {
    this.add.image(960, 540, 'background').setScale(1);
    
    this.anims.create({ 
      key: 'blue', 
      frames: this.anims.generateFrameNames('breakout ', {
         suffix: '-Breakout-Tiles.png', 
         start: 1,
         end: 7, 
         zeroPad: 3 
        }), 
      repeat: -1 });

    var blue = this.add.sprite(100, 100, 'breakout').setScale(.25).play('blue')
    
    
   
   


  }
}
