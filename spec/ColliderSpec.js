describe('Collider', function (){
	it('should be able to create a collider', function(){
		var asteroid = new Asteroid (new Vector(0,0));
		var collider = new Collider (asteroid, 5);
		expect(collider).toBeDefined();
	});
	it('should be able to check a collison', function(){
		// create bodies with a position to put colliders on
		var body1 = {function getPosition() {return new Vector(2,0)}};
		var body2 = {function getPosition() {return new Vector(3,3)}};
		var collider1= new Collider (body1,5);
		var collider2= new Collider (body2,3);
		expect(collider1.checkCollision(collider2)).toBe(true);
	});
	it('should be able to check a non-collison', function(){
		var body1 = {function getPosition() {return new Vector(2,0)}};
		var body2 = {function getPosition() {return new Vector(13,3)}};
		var collider1= new Collider (body1,5);
		var collider2= new Collider (body2,3);
		expect(collider1.checkCollision(collider2)).toBe(false);
	});
})