///<reference path="./lib/phaser.comments.d.ts"/>
var Teknikgymansiet;
(function (Teknikgymansiet) {
    var Projekt2018 = /** @class */ (function () {
        function Projekt2018() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update, render: this.render });
        }
        Projekt2018.prototype.preload = function () {
            this._assetList = [];
            this._assetList.push(['kungHoffa', 'assets/img/hoffa.png']);
            this._assetList.push(['mtnDew', 'assets/img/dew.png']);
            this._assetList.forEach(function (asset) {
                this.game.load.image(asset[0], asset[1]);
            }.bind(this));
        };
        Projekt2018.prototype.create = function () {
            this._hoffaReference = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'kungHoffa');
            this._hoffaReference.anchor.setTo(0.5, 0.5);
            this._animatedSpriteCollection = [];
            for (var i = 0; i < 25; i++) {
                var dewCan = this.game.add.sprite(Math.random() * 800, Math.random() * 800, 'mtnDew');
                dewCan.anchor.setTo(0.5, 0.5);
                dewCan.width = 55 + (Math.random() * 250) - 100;
                dewCan.height = 55 + (Math.random() * 250) - 100;
                dewCan.direction = Math.floor(Math.random() * 21) - 10;
                this._animatedSpriteCollection.push(dewCan);
            }
        };
        Projekt2018.prototype.update = function () {
            this._animatedSpriteCollection.forEach(function (sprt) {
                sprt.angle += sprt.direction;
            }.bind(this));
        };
        Projekt2018.prototype.render = function () {
        };
        return Projekt2018;
    }());
    Teknikgymansiet.Projekt2018 = Projekt2018;
})(Teknikgymansiet || (Teknikgymansiet = {}));
