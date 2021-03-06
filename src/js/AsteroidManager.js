"use strict";
class AsteroidManager {
    constructor(scene) {
    	this.scene = scene;
    	this.NUM_ASTEROIDS = 10;
    	this.asteroids = [];
    }
    spawn() {
    	return new Asteroid( new Vector(Math.random()*this.scene.width, Math.random()*this.scene.height));
    }
    initiate() {
	    var i;
	    for (i = 0; i < this.NUM_ASTEROIDS; i++) {
	        this.asteroids.push(this.spawn());
	    }
    }
    count() {
	    return this.asteroids.length;
    }
    render() {
    	var i;
		for (i in this.asteroids) {
		    this.asteroids[i].render();
		}
    }
    update (dt) {
    	var i;
		for (i in this.asteroids) {
		    this.asteroids[i].update(dt);
		}
    }
}
