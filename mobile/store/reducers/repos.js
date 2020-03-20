const INITIAL_STATE = [{}];

export default function actionFilter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CLEAR_DATA':
      return INITIAL_STATE;
    case 'SET_DATA':
      return action.payload;
    default:
      break;
  }
  return state;
}
