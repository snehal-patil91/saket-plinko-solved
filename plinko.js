class Plinko{
    constructor(x, y, radius, color){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.color = color;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill(this.color);
        ellipse(pos.x, pos.y, this.radius);
    }
}