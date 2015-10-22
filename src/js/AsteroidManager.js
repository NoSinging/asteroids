"use strict";
class AsteroidManager {
    constructor(scene) {
    	this.scene = scene;
    }
    spawn() {
    	return new Asteroid( new Vector(Math.random()*this.scene.width, Math.random()*this.scene.height));
    }
}
