"use strict";
class Asteroid {
    constructor(position) {
        this.position = position;
        //this.RADIUS = 100;
        //this.COLOUR = '#ffffff';//'#ff0000';
        this.velocity = new Vector(20, 0);
        this.velocity.rotate(2*Math.PI*Math.random());
        this.vertices = [   new Vector(160,0),
                            new Vector(100,20),
                            new Vector(80,60),
                            new Vector(30,120),
                            new Vector(0,140),
                            new Vector(-30,90),
                            new Vector(-90,50),
                            new Vector(-120,0),
                            new Vector(-100,-40),
                            new Vector(-30,-80),
                            new Vector(0,-120),
                            new Vector(60,-60),
                            new Vector(120,-30),
                            new Vector(160,0)];
        this.polygon = new Polygon (this.vertices, '#ffffff', 5);
        this.rotation = 2*Math.PI*Math.random();
        this.ROTATION_INCREMENT = (Math.random()-0.5)*Math.PI/200.0;
    }
    getPosition () {
        return this.position;
    }
    render () {


        this.polygon.setPosition(this.position);
        this.polygon.setRotation(this.rotation);
        this.polygon.render();
    }
    update (dt) {
        this.rotation += this.ROTATION_INCREMENT;
        this.updatePosition(dt);
    }
    updatePosition (dt) {
    	//increment the position based on velocity and time increment
        this.position.add(this.velocity.clone().multiply(dt));
    }
}
