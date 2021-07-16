class Ball{
    constructor(x, y, radius){
        var options = {
            friction: 0.8,
            restitution: 1,
            density: 0.4
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        fill("blue");
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
