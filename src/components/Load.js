import React, { Component } from "react";
import Circle from "../class/Circle";
import "../styles/Load.scss";

class Load extends Component {
  constructor(props) {
    super(props);
    this.stopId = "";
    this.circles = [];
  }

  componentDidMount() {
    //setup canvas
    const canvas = document.querySelector(".load__canvas");
    const c = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;

    //create circles
    const color = "#262626";
    const radius = 2;
    const quantity = 25;
    const coor = 150;

    for (let i = 0; i < quantity; i++) {
      const direction = Math.random() * 2 - 1;
      this.circles.push(new Circle(c, coor, coor, radius, color, direction));
    }
    //run animation
    const animation = () => {
      this.stopId = requestAnimationFrame(animation);
      c.fillStyle = "rgba(251, 251, 251,0.1)";
      c.fillRect(0, 0, canvas.width, canvas.height);
      this.circles.forEach((circle) => circle.update());
    };
    animation();
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.stopId);
  }
  render() {
    return (
      <div className="load">
        <canvas className="load__canvas"></canvas>
      </div>
    );
  }
}

export default Load;
