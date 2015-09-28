
"use strict";
// player class has an update() & render() method
class Player {
    constructor() {
        this.ROTATION_INCREMENT = Math.PI/10;
        this.rotation = 0.0;
    }
    update () {

    }
    render () {
        // player ship is made up of a circle and radius
        // circle
        var shipRadius=10;
        ctx.beginPath();
        ctx.strokeStyle = '#ff0000';
        ctx.arc(200,200,shipRadius,0,2*Math.PI);
        ctx.stroke();

        // draw a radius to indicate direction
        var shipRadiusX = shipRadius*Math.cos(this.rotation);
        var shipRadiusY = shipRadius*Math.sin(this.rotation);

        ctx.beginPath();
        ctx.moveTo(200+shipRadiusX,200+shipRadiusY);
        ctx.lineTo(200,200);
        ctx.stroke();
    }
    getRotation () {
        return this.rotation;
    }
    rotateClockwise () {
        console.log('clockwise')
        this.rotation += this.ROTATION_INCREMENT;
    }
    rotateAntiClockwise () {
        console.log('anti-clockwise')
        this.rotation -= this.ROTATION_INCREMENT;
    }

    handleInput (action) {
        if (action == 'up') {
           
        } else if (action == 'down') {
          
        } else if (action == 'right') {
            this.rotateClockwise();
        } else if (action == 'left') {
            this.rotateAntiClockwise();
        } 
    }

    
}



