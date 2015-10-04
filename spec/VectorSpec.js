describe('Vector', function (){
	it('should be able to create a Vector', function(){
		var vector = new Vector(1,2);
		expect(vector).toBeDefined();
		expect(vector.x).toBe(1);
		expect(vector.y).toBe(2);
	});
	it('should be able to multiply a Vector by a scalar', function(){
		var vector = new Vector(1,2);
		expect(vector.multiply(0.5)).toEqual(new Vector(0.5,1.0));
	});
	it('should be able to add a Vector to the Vector', function(){
		var vector = new Vector(1,2);
		expect(vector.add(new Vector(3,3))).toEqual(new Vector(4,5));
	});
	it('should be able to rotate a Vector', function(){
		var vector = new Vector(100,0);
		vector.rotate(Math.PI/2);
		//floating point errors mean this isn't exact, but close enough
		expect(vector.x).toBeLessThan(0.000000001);
		expect(vector.y).toEqual(100);
	});
	it('should be able to get the length of a Vector', function(){
		var vector = new Vector(3,4);
		expect(vector.length()).toBe(5);
	});
	it('should be able to get angle from x-axis of a Vector', function(){
		var vectorQuadrant1 = new Vector(1,1);
		expect(vectorQuadrant1.angle()).toBe(Math.PI/4);

		var vectorQuadrant2 = new Vector(-1,1);
		expect(vectorQuadrant2.angle()).toBe(3*Math.PI/4);

		var vectorQuadrant3 = new Vector(-1,-1);
		expect(vectorQuadrant3.angle()).toBe(-3*Math.PI/4);

		var vectorQuadrant4 = new Vector(1,-1);
		expect(vectorQuadrant4.angle()).toBe(-Math.PI/4);
	});
	it('should be able to clone a Vector', function(){
		var vector = new Vector(3,4);
		var cloneVector = vector.clone();
		expect(cloneVector).toEqual(new Vector(3,4));

		vector.add(new Vector(1,2));
		expect(cloneVector).toEqual(new Vector(3,4));

	});
	it('should be able to wrap a Vector within a bounding box', function(){
		// define box via the top left and bottom right position
		var topRight = new Vector(500,400);

		// scenario 1: inside the box, should be unchanged.
		var vectorInsideBox = new Vector(200,200);
		expect(vectorInsideBox.wrap(topRight)).toEqual(new Vector(200,200));

		// scenario 2.0: outside the box, to the right
		var vectorRightOfBox = new Vector(600,200);
		expect(vectorRightOfBox.wrap(topRight)).toEqual(new Vector(100,200));

		// scenario 2.1: outside the box, to the far right
		var vectorFarRightOfBox = new Vector(1100,200);
		expect(vectorFarRightOfBox.wrap(topRight)).toEqual(new Vector(100,200));

		// scenario 3.0: outside the box, to the left
		var vectorLeftOfBox = new Vector(-10,200);
		expect(vectorLeftOfBox.wrap(topRight)).toEqual(new Vector(490,200));

		// scenario 3.1: outside the box, to the far left
		var vectorFarLeftOfBox = new Vector(-510,200);
		expect(vectorFarLeftOfBox.wrap(topRight)).toEqual(new Vector(490,200));

		// scenario 4: outside the box, above
		var vectorAboveBox = new Vector(300,410);
		expect(vectorAboveBox.wrap(topRight)).toEqual(new Vector(300,10));

		// scenario 5: outside the box, below
		var vectorBelowBox = new Vector(300,-10);
		expect(vectorBelowBox.wrap(topRight)).toEqual(new Vector(300,390));
	});

	it('should be able to subtract a Vector from a Vector', function(){
		var vector = new Vector(3,3);
		expect(vector.subtract(new Vector(1,2))).toEqual(new Vector(2,1));
	});
})