import { GameObject, GameObjectType } from "./gameObject";

export class MovableObject extends GameObject {
  private _speed: number = 400;
  // 物体当前移动的 x
  private _oldX: number = 0;
  // 物体当前移动的 y
  private _oldY: number = 0;
  // 物体将要移动的 x
  private _newX: number = 0;
  // 物体将要移动的 y
  private _newY: number = 0;

  get speed(): number {
    return this._speed;
  }

  set speed(value: number) {
    this._speed = value;
  }

  get oldX(): number {
    return this._oldX;
  }

  set oldX(value: number) {
    this._oldX = value;
  }

  get oldY(): number {
    return this._oldY;
  }

  set oldY(value: number) {
    this._oldY = value;
  }

  get newX(): number {
    return this._newX;
  }

  set newX(value: number) {
    this._newX = value;
  }

  get newY(): number {
    return this._newY;
  }

  set newY(value: number) {
    this._newY = value;
  }

  public map: Array<Array<HTMLElement>>;

  constructor(map: Array<Array<HTMLElement>>, name: string, type: GameObjectType) {
    super(name, type);
    this.map = map;
  }
}