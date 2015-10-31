"use strict";
class Asteroid {
    constructor(position) {
        this.position = position;
        this.RADIUS = 100;
        this.COLOUR = '#ffffff';//'#ff0000';
        this.velocity = new Vector(20, 0);
        this.velocity.rotate(2*Math.PI*Math.random());
    }
    getPosition () {
        return this.position;
    }
    render () {
        // asteroid is a circle. for now!
        // TODO: make me a polygon
        ctx.beginPath();
        ctx.lineWidth=5;
        ctx.strokeStyle = this.COLOUR;
        ctx.arc(this.position.x, this.position.y, this.RADIUS, 0, 2*Math.PI);
        ctx.stroke();
    }
    update (dt) {
        this.updatePosition(dt);
    }
    updatePosition (dt) {
    	//increment the position based on velocity and time increment
        this.position.add(this.velocity.clone().multiply(dt));
    }
}
