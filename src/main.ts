///<reference path="./lib/phaser.comments.d.ts"/>
module Teknikgymansiet {

  export class Projekt2018 {

      private _hoffaReference: any;
      private _animatedSpriteCollection: any;
      private _assetList:any;

      constructor() {
          this.game = new Phaser.Game(800 /*Width*/, 600/*Height*/, Phaser.AUTO, 'content', {
              preload: this.preload,
              create: this.create,
              update: this.update,
              render: this.render
            });
      }

      game: Phaser.Game;


      preload() {
        this._assetList=[];
        this._assetList.push(['kungHoffa', 'assets/img/hoffa.png']);
        this._assetList.push(['mtnDew', 'assets/img/dew.png']);

          this._assetList.forEach(function(asset){
                this.game.load.image(asset[0], asset[1]);
          }.bind(this));
      }

      create() {
          this._hoffaReference = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'kungHoffa');
          this._hoffaReference.anchor.setTo(0.5, 0.5);

          this._animatedSpriteCollection = [];

          for( var i=0; i < 25; i++) {

            let dewCan = this.game.add.sprite( Math.random() * 800, Math.random()*800, 'mtnDew');
            dewCan.anchor.setTo( 0.5, 0.5);
            dewCan.width = 55 + (Math.random() * 250) - 100;
            dewCan.height = 55 + (Math.random() * 250) - 100;
            (<any>dewCan).direction = Math.floor(Math.random() * 21) - 10;

            this._animatedSpriteCollection.push( dewCan );

        }
      }


      update() {
        this._animatedSpriteCollection.forEach( function(sprt){
          sprt.angle += sprt.direction;
        }.bind(this));
      }

      render() {

      }
  }
}
