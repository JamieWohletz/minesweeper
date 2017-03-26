export const GENERATE_BOARD = 'GENERATE_BOARD';
export const CLICK_TILE = 'CLICK_TILE';

export const Screens = {
  MENU: 'MENU',
  BOARD: 'MENU'
};

export function generateBoard(rows, cols, mineCount) {
  return {
    type: GENERATE_BOARD,
    data: {
      rows,
      cols,
      mineCount
    }
  };
}

export function clickTile(i, j) {
  return {
    type: CLICK_TILE,
    data: {
      i,
      j
    }
  };
}

/*

{
  board: [],
  show: 'MENU'
}
*/