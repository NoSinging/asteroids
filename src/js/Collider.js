"use strict";
class Collider {
    constructor(parent, radius) {
        // nice and simple
        // a circle collider
        // positioned on the parent
        this.radius = radius;
        this.parent = parent;
    }
    getPosition () {
        return this.parent.getPosition();
    }
    checkCollision(collider2) {
        // is the distance of hte centre of 2 circles is less than the sum of the 2 radius then there is a collision
        return (this.getPosition().clone().subtract(collider2.getPosition()).length() < (this.radius + collider2.radius));
    }
}