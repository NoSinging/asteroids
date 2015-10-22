describe('Asteroid Manager', function (){
	it('should be able to spawn an asteroid', function(){
		var asteroidManager = new AsteroidManager (new Scene(800,1000));
		var asteroid = asteroidManager.spawn();
		expect(asteroid).toBeDefined();

		// It should have a position
		expect(asteroid.getPosition()).toBeDefined();
	});
})