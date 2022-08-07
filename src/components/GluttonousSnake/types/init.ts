export function createMap(dot: any): Array<Array<HTMLElement>> {
  let map: any = [];
  let index = 0;
  for ( let i = 0; i < 12; i++ ) {
    map[i] = [];
    for ( let j = 0; j < 12; j++ ) {
      map[i][j] = dot[index];
      index++;
    }
  }
  return map;
}