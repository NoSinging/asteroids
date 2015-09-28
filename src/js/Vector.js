"use strict";
class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    multiply (scalar) {
    	this.x *= scalar;
    	this.y *= scalar;
    	return this;
    }
    add (vector) {
    	this.x += vector.x;
    	this.y += vector.y;
    	return this;
    }
    rotate (angleInRadians) {
    	var length = this.length();
    	var initialAngle = this.angle();
    	var newAngle = initialAngle + angleInRadians;
    	this.x = length*Math.cos(newAngle);
    	this.y = length*Math.sin(newAngle);
    	return this;
    }
    length () {
    	return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    //angle from x axis
    angle () {
    	return Math.atan2(this.y,this.x );
    }
}