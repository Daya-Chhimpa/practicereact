import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0, // plane x position
      y: 100, // plane y position
      obstacles: [], // array of obstacle positions
      score: 0, // current score
      gameover: false, // game over flag
    };
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.interval = setInterval(() => this.update(), 10);
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 32 && !this.state.gameover) {
      this.setState((prevState) => ({ y: prevState.y - 50 }));
    }
  };

  update = () => {
    if (this.state.gameover) return;
    this.setState((prevState) => ({ x: prevState.x + 1 }));
    if (this.state.x % 100 === 0) {
      const obstacleY = Math.floor(Math.random() * 200) + 50;
      this.setState((prevState) => ({
        obstacles: [...prevState.obstacles, obstacleY],
      }));
    }
    this.checkCollision();
    this.draw();
  };

  checkCollision = () => {
    const { x, y, obstacles } = this.state;
    if (y < 0 || y > 300) {
      this.setState({ gameover: true });
      return;
    }
    for (let i = 0; i < obstacles.length; i++) {
      if (x >= i * 100 && x <= i * 100 + 50 && (y <= obstacles[i] || y >= obstacles[i] + 100)) {
        this.setState({ gameover: true });
        return;
      }
    }
    this.setState((prevState) => ({ score: prevState.score + 1 }));
  };

  draw = () => {
    const { x, y, obstacles, score, gameover } = this.state;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(x, y, 50, 50);
    for (let i = 0; i < obstacles.length; i++) {
      this.ctx.fillStyle = '#FF0000';
      this.ctx.fillRect(i * 100 + 200, 0, 50, obstacles[i]);
      this.ctx.fillRect(i * 100 + 200, obstacles[i] + 100, 50, 300 - obstacles[i] - 100);
    }
    this.ctx.fillStyle = '#000000';
    this.ctx.font = '20px Arial';
    this.ctx.fillText(`Score: ${score}`, 10, 30);
    if (gameover) {
      this.ctx.fillText('Game Over', 150, 150);
    }
  };

  render() {
    return (
      <div>
        <canvas ref="canvas" width={600} height={300} />
      </div>
    );
  }
}

export default Game;
