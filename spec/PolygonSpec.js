describe('Polygon', function (){
	it('should be able to create a polygon', function(){
        var vertices = [	new Vector(6,0),
                            new Vector(0,2),
                            new Vector(-1,3),
                            new Vector(-3,1),
                            new Vector(-2,0),
                            new Vector(-3,-1),
                            new Vector(-1,-3),
                            new Vector(0,-2)];
		var polygon = new Polygon(vertices, 10,  '#ffffff', 5);
		expect(polygon).toBeDefined();
	});
})