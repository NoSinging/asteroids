
"use strict";
// player class has an update() & render() method
class Player {
    constructor(position) {
        this.ROTATION_INCREMENT = Math.PI/10.0;
        this.VELOCITY_INCREMENT = 20; 
        this.MAX_SPEED = 400; //unit pixels/second
        this.RADIUS = 10.0;
        this.SHIP_VECTOR = new Vector(this.RADIUS, 0);
        this.position = position;
        this.velocity = new Vector(0, 0);
        this.rotation = 0.0;
    }
    update (dt) {
        this.updatePosition(dt);
    }
    render () {
        // player ship is made up of a circle and radius
        // circle
        ctx.beginPath();
        ctx.strokeStyle = '#ff0000';
        ctx.arc(this.position.x, this.position.y, this.RADIUS, 0, 2*Math.PI);
        ctx.stroke();

        // draw a radius to indicate direction
        // FIXME: could do this rotation more efficiently elsewhere
        var rotatedShipVector = this.SHIP_VECTOR.clone().rotate(this.rotation);

        ctx.beginPath();
        ctx.moveTo(this.position.x+rotatedShipVector.x,this.position.y+rotatedShipVector.y);
        ctx.lineTo(this.position.x,this.position.y);
        ctx.stroke();
    }
    getRotation () {
        return this.rotation;
    }
    setRotation (rotation) {
        this.rotation = rotation;
        return this;
    }
    getPosition () {
        return this.position;
    }
    getVelocity () {
        return this.velocity;
    }
    setVelocity (velocity) {
        this.velocity = velocity;
        return this;
    }
    rotateClockwise () {
        console.log('clockwise');
        this.rotation += this.ROTATION_INCREMENT;
    }
    rotateAntiClockwise () {
        console.log('anti-clockwise');
        this.rotation -= this.ROTATION_INCREMENT;
    }
    thrust () {
        // the force of the rocket thrust will accelerate the rocket
        // and alter it's velocity.
        // calculate velocityDelta vector
        // start with a unit vector in x direction
        var velocityDelta = new Vector(1,0);
        var speed = 0;

        // velocityDelta is in the direction of the ship
        // scale velocityDelta by velocity increment & FIXME: time increment
        velocityDelta.rotate(this.rotation).multiply(this.VELOCITY_INCREMENT);
        this.velocity.add(velocityDelta);

        // observe a max speed
        speed = this.velocity.length();
        console.log(speed);
        if (speed > this.MAX_SPEED) {
            this.velocity.multiply(this.MAX_SPEED/speed);
        }
    }
    updatePosition (dt) {
        //FIXME: add time delta
        this.position.add(this.velocity.clone().multiply(dt));
    }

    handleInput (action) {
        if (action == 'up') {
            this.thrust();
        } else if (action == 'right') {
            this.rotateClockwise();
        } else if (action == 'left') {
            this.rotateAntiClockwise();
        } 
    }

    
}



