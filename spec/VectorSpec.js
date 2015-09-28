describe('Vector', function (){
	it('should be able to create a Vector', function(){
		var vector = new Vector(1,2);
		expect(vector).toBeDefined();
		expect(vector.x).toBe(1);
		expect(vector.y).toBe(2);
	});
	it('should be able to multiply a Vector by a scalar', function(){
		var vector = new Vector(1,2);
		expect(vector.multiply(0.5)).toBeDefined();
		expect(vector.x).toBe(0.5);
		expect(vector.y).toBe(1.0);
	});
	it('should be able to add a Vector to the Vector', function(){
		var vector = new Vector(1,2);
		expect(vector.add(new Vector(3,3))).toBeDefined();
		expect(vector.x).toBe(4);
		expect(vector.y).toBe(5);
	});
	it('should be able to rotate a Vector', function(){
		var vector = new Vector(0,1);
		expect(vector.rotate(Math.PI/2)).toBe(new Vector(-1,0));
	});
	it('should be able to get the length of a Vector', function(){
		var vector = new Vector(3,4);
		expect(vector.length()).toBe(5);
	});
	it('should be able to angle from x-axis of a Vector', function(){
		var vectorQuadrant1 = new Vector(1,1);
		expect(vectorQuadrant1.angle()).toBe(Math.PI/4);

		var vectorQuadrant2 = new Vector(-1,1);
		expect(vectorQuadrant2.angle()).toBe(3*Math.PI/4);

		var vectorQuadrant3 = new Vector(-1,-1);
		expect(vectorQuadrant3.angle()).toBe(-3*Math.PI/4);

		var vectorQuadrant4 = new Vector(1,-1);
		expect(vectorQuadrant4.angle()).toBe(-Math.PI/4);
	});
})