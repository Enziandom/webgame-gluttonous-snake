interface IGameObject {
  name: string,
  type: GameObjectType
}

export enum GameObjectType {
  movable,
  unmovable
}

/**
 * @param name 游戏物体名称
 * @param type 游戏物体类型，可移动还是不可移动
 */
export class GameObject implements IGameObject {
  name: string;
  type: GameObjectType;

  constructor(name: string, type: GameObjectType) {
    this.name = name;
    this.type = type;
  }
}