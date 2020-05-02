import randomValueFromRange from "../functions/randomValueFromRange";

export default class Circle {
  constructor(c, x, y, radius, color, direction) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.startX = x;
    this.startY = y;
    this.velocity = 0.03 * direction;
    this.radius = radius;
    this.color = color;
    this.radians = randomValueFromRange(1, 10);
    this.distance = randomValueFromRange(50, 100);
  }
  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.c.fillStyle = this.color;
    this.c.fill();
  }
  update() {
    this.radians += this.velocity;
    this.x = this.startX + Math.cos(this.radians) * this.distance;
    this.y = this.startY + Math.sin(this.radians) * this.distance;
    this.draw();
  }
}
