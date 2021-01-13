class Polygon {
    constructor(x, y, radius) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
      }

      display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        circle(pos.x, pos.y, this.radius);
      }
};