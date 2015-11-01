"use strict";
// player class has an update() & render() method
class Player {
    constructor(position) {
        this.ROTATION_INCREMENT = Math.PI/20.0;
        this.VELOCITY_INCREMENT = 20;
        this.MAX_SPEED          = 400; //unit pixels/second
        this.position = position;
        this.velocity = new Vector(0, 0);
        this.rotation = 0.0;
        // the ship shape
        this.vertices = [   new Vector(-20,-20),
                            new Vector(60,0),
                            new Vector(-20,20)];
        this.polygon = new Polygon (this.vertices, '#ff0000', 5);
    }
    update (dt) {
        this.updatePosition(dt);
    }
    render () {

        this.polygon.setPosition(this.position);
        this.polygon.setRotation(this.rotation);
        this.polygon.render();

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
        this.rotation += this.ROTATION_INCREMENT;
    }
    rotateAntiClockwise () {
        this.rotation -= this.ROTATION_INCREMENT;
    }
    thrust () {
        // the force of the rocket thrust will accelerate the rocket
        // and alter it's velocity.
        // calculate velocityDelta vector
        // start with a unit vector in x direction
        var velocityDelta = new Vector(1,0);
        // velocityDelta is in the direction of the ship
        // scale velocityDelta by velocity increment 
        // TODO: Add clock normalisation to acceleration
        //       assuming it's less import to game play than
        //       velocity.
        velocityDelta.rotate(this.rotation).multiply(this.VELOCITY_INCREMENT);
        this.velocity.add(velocityDelta);

        // limit speed
        this.limitSpeed();
        
    }
    limitSpeed () {
        var speed = 0;
        // observe a max speed
        speed = this.velocity.length();
        if (speed > this.MAX_SPEED) {
            this.velocity.multiply(this.MAX_SPEED/speed);
        }
    }
    updatePosition (dt) {
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



