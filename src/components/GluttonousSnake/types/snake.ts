import { MovableObject } from "./movableObject";
import { GameObjectType } from "./gameObject";

export class Snake extends MovableObject {
  constructor(map: Array<Array<HTMLElement>>, name: string, type: GameObjectType) {
    super(map, name, type);
  }

  private initInterval: any;

  init() {
    this.initInterval = setInterval(() => {
      this.oldY = this.newY;
      this.oldX = this.newX;
      this.map[this.oldY][this.oldX].style.backgroundColor = "red";
      this.newY++;
    }, this.speed);
  }
}