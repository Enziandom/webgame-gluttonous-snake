import { MovableObject } from "./movableObject";
import { GameObjectType } from "./gameObject";

export class Snake extends MovableObject {
  constructor(map: Array<Array<HTMLElement>>, name: string, type: GameObjectType) {
    super(map, name, type);
  }

  public up(): void {

  }

  public down(): void {
    this.interval = setInterval(() => {
      this.newY++;
      this.oldY = this.newY - 1;
      if ( this.newY > 11 ) {
        clearInterval(this.interval);
      } else {
        this.map[this.newY][this.newX].style.backgroundColor = "red";
        this.map[this.oldY][this.oldX].style.backgroundColor = "blue";
      }
    }, this.speed);
  }

  public left(): void {

  }

  public right(): void {
    this.interval = setInterval(() => {
      this.newX++;
      this.oldX = this.newX - 1;
      if ( this.newX > 11 ) {
        clearInterval(this.interval);
      } else {
        this.map[this.newY][this.newX].style.backgroundColor = "red";
        this.map[this.oldY][this.oldX].style.backgroundColor = "blue";
      }
    }, this.speed);
  }
}