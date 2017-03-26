function binaries(zeroes, ones) {
  const a = [];
  for (let i = 0; i < zeroes; i++) {
    a.push(0);
  }
  for (let i = 0; i < ones; i++) {
    a.push(1);
  }
  return a;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawRandom(array, low, high) {
  const index = getRandomInt(low, high);
  return [array[index], index];
}

function arraySwap(index1, index2, array) {
  const tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
  return array;
}

function tile(binary) {
  return {
    isMine: binary === 1,
    character: '',
    flagged: false,
    revealed: false
  };
}

function tileAt(i, j, board) {
  if (board[i] && board[i][j]) {
    return board[i][j];
  }
  return null;
}

function adjacents(i, j, board, includeCorners) {
  const array = [];
  for (let a = -1; a <= 1; a++) {
    for (let b = -1; b <= 1; b++) {
      const tile = tileAt(i + a, j + b, board);
      array.push([tile, [i + a, j + b]]);
    }
  }
  return array.filter((t, index) => {
    if (includeCorners && index !== 4) {
      return true;
    }
    return index % 2 !== 0;
  });
}

function getCharacter(i, j, board) {
  const t = tileAt(i, j, board);
  if (t.isMine) {
    return '💣';
  }
  const adjs = adjacents(i, j, board, true);
  const number = adjs.reduce((sum, [tile, indices]) => {
    if (tile && tile.isMine) {
      return sum + 1;
    }
    return sum;
  }, 0);
  return number === 0 ? '' : number;
}

function revealAllMines(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (tileAt(i, j, board).isMine) {
        reveal(i, j, board, true);
      }
    }
  }
}

function reveal(i, j, board, force) {
  const tile = tileAt(i, j, board);
  if (!tile || (tile.flagged && !force)) {
    return;
  }
  tile.revealed = true;
  tile.character = getCharacter(i, j, board);
}

export function generateBoard(rows, cols, mineCount) {
  if (rows !== cols) {
    return null;
  }
  const tileCount = rows * cols;
  const blankCount = tileCount - mineCount;
  const tiles = binaries(blankCount, mineCount);
  const board = [];
  let leftWall = 0;
  let i = 0;
  while (i < rows) {
    let j = 0;
    board.push([]);
    while (j < cols) {
      let [binary, index] = drawRandom(tiles, leftWall, tileCount);
      board[i].push(tile(binary));
      arraySwap(index, leftWall, tiles);
      leftWall += 1;
      j += 1;
    }
    i += 1;
  }
  return board;
}

export function toggleTileFlag(i, j, board) {
  const tile = tileAt(i, j, board);
  if (!tile.revealed) {
    tile.flagged = !tile.flagged;
  }
}

export function revealTile(i, j, board) {
  const tile = tileAt(i, j, board);
  (function safeReveal(a, b) {
    const tile = tileAt(a, b, board);
    if (!tile || tile.revealed || tile.flagged) {
      return;
    }
    reveal(a, b, board);
    if (tile.character !== '') {
      return;
    }
    const adjs = adjacents(a, b, board, false);
    adjs.forEach(([t, [newI, newJ]]) => {
      safeReveal(newI, newJ);
    });
  }(i, j));
  if (tile.isMine && !tile.flagged) {
    revealAllMines(board);
  }
  return board;
}