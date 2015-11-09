"use strict";
class AsteroidManager {
    constructor(scene) {
    	this.scene = scene;
    	this.NUM_ASTEROIDS = 6;
    	this.asteroids = [];
    }
    spawn() {
    	return new Asteroid( new Vector(Math.random()*this.scene.width, Math.random()*this.scene.height));
    }
    getAsteroids() {
        return this.asteroids;
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

            // wrap around the scene boundary
            this.asteroids[i].getPosition().wrap(scene.getCorner());

            //TODO: a more sophisticated wrap
            // smooth out the jerky wrap
            // possible solution is render a reflection of the asteroid at the opposite scene boundary
		}
    }
}
