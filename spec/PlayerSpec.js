describe('Player', function (){
	it('should be able to create a player', function(){
		var player = new Player;
		expect(player).toBeDefined();
	});
	it('should be able to set initial position', function(){
		var player = new Player(new Vector(200,100));
		expect(player.getPosition()).toEqual(new Vector(200,100));
	});
	it('the initial player rotation should be zero', function(){
		var player = new Player;
		expect(player.getRotation()).toBe(0);
	});
	it('should be able to set the player rotation', function(){
		var player = new Player;
		player.setRotation(Math.PI/2);
		expect(player.getRotation()).toBe(Math.PI/2);
	});
	it('should be able to rotate player clockwise and anti-clockwise', function(){
		var player = new Player;
		var initialRotation = player.getRotation();
		player.rotateClockwise();
		expect(player.getRotation()).toBeGreaterThan(initialRotation);

		player.rotateAntiClockwise();
		expect(player.getRotation()).toBe(initialRotation);
	});
	it('the initial player velocity should be zero', function(){
		var player = new Player;
		expect(player.getVelocity()).toEqual(new Vector(0,0));
	});
	it('should be able to set the player velocity', function(){
		var player = new Player;
		player.setVelocity(new Vector(2,0));
		expect(player.getVelocity()).toEqual(new Vector(2,0));
	});
	it('should be able to update the player position', function(){
		// set time increment to be 10ms
		var dt = 0.01;
		// initiate player at origin
		var player = new Player (new Vector(0,0));
		// set a velocity of 200pixels/second in x direction
		player.setVelocity(new Vector(200,0));
		player.updatePosition(dt);
		// expect play to have moved 2 pixels in one time increment
		expect(player.getPosition()).toEqual(new Vector(2,0));
	});
	it('should be able to thrust rocket ship forward: simple scenario', function(){
		var player = new Player;
		// scenario 1: stationary & pointed in x direction
		// assuming player.VELOCITY_INCREMENT = 20
		player.thrust();
		expect(player.getVelocity()).toEqual(new Vector(20,0));
	});
	it('should be able to limit speed of player', function(){
		var player = new Player;
		player.setVelocity(new Vector(800,0));
		player.limitSpeed();
		// assuming player.MAX_SPEED = 400
		expect(player.getVelocity()).toEqual(new Vector(400,0));
	});
	it('should be able to thrust rocket ship forward: complex scenario', function(){
		var player = new Player;
		// scenario 2: moving in x direction & pointed in y direction
		// assuming player.VELOCITY_INCREMENT = 20
		player.setVelocity(new Vector(20,0));
		player.setRotation(Math.PI/2);
		player.thrust();		
		expect(player.getVelocity()).toEqual(new Vector(20,20));

	});
})