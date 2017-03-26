import { Screens, GENERATE_BOARD, CLICK_TILE } from '../actions/MinesweeperActions';

const initialState = {
  board: [],
  screen: Screens.MENU
};

function app(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default app;