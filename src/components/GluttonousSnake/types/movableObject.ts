import { GameObject, GameObjectType } from "./gameObject";

export class MovableObject extends GameObject {
  private _speed: number = 400;
  private _oldX: number = 0;
  private _oldY: number = 0;
  private _newX: number = 0;
  private _newY: number = 0;
  private _interval: number = 0;

  /**
   * 获取定时器 ID
   */
  get interval(): number {
    return this._interval;
  }

  /**
   * 设置定时器 ID
   * @param value 由调用方赋予，这里只是保存 ID
   */
  set interval(value: number) {
    this._interval = value;
  }

  /**
   * 获取定时器速度
   */
  get speed(): number {
    return this._speed;
  }

  /**
   * 设置定时器速度
   * @param value 值越大速度越慢，值越小速度越快
   */
  set speed(value: number) {
    this._speed = value;
  }

  /**
   * 获取物体当前的 X，X 代表在二维数组中的第二维，即横向 X 轴方向
   */
  get oldX(): number {
    return this._oldX;
  }

  /**
   * 设置物体当前的 X，X 代表在二维数组中的第二维，即横向 X 轴方向
   * @param value 值越大距离圆点（0,0）越远，反之亦然
   */
  set oldX(value: number) {
    this._oldX = value;
  }

  /**
   * 获取物体当前的 Y，Y 代表在二维数组中的第一维，即纵向 Y 轴方向
   */
  get oldY(): number {
    return this._oldY;
  }

  /**
   * 设置物体当前的 Y，Y 代表在二维数组中的第一维，即纵向 Y 轴方向
   * @param value 值越大距离圆点（0,0) 越远，反之亦然
   */
  set oldY(value: number) {
    this._oldY = value;
  }

  /**
   * 获取物体将要移动的 X，X 代表在二维数组中的第二维，即横向 X 轴方向
   */
  get newX(): number {
    return this._newX;
  }

  /**
   * 设置物体当前的 X，X 代表在二维数组中的第二维，即横向 X 轴方向
   * @param value 值越大距离圆点（0,0) 越远，反之亦然
   */
  set newX(value: number) {
    this._newX = value;
  }

  /**
   * 获取物体将要移动的 Y，Y 代表在二维数组中的第一维，即纵向 Y 轴方向
   */
  get newY(): number {
    return this._newY;
  }

  /**
   * 设置物体当前的 Y，Y 代表在二维数组中的第一维，即纵向 Y 轴方向
   * @param value 值越大距离圆点（0,0) 越远，反之亦然
   */
  set newY(value: number) {
    this._newY = value;
  }

  public map: Array<Array<HTMLElement>>;

  constructor(map: Array<Array<HTMLElement>>, name: string, type: GameObjectType) {
    super(name, type);
    this.map = map;
  }
}