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
    }
    getPosition () {
        return this.position;
    }
    render () {


        this.polygon.setPosition(this.position);
        this.polygon.render();
        /*
        // asteroid is a circle. for now!
        // TODO: make me a polygon
        ctx.beginPath();
        ctx.lineWidth=5;
        ctx.strokeStyle = this.COLOUR;
        ctx.arc(this.position.x, this.position.y, this.RADIUS, 0, 2*Math.PI);
        ctx.stroke();
        */
    }
    update (dt) {
        this.updatePosition(dt);
    }
    updatePosition (dt) {
    	//increment the position based on velocity and time increment
        this.position.add(this.velocity.clone().multiply(dt));
    }
}
