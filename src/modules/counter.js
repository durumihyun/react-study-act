//액션타입, 액션생성함수, 초기값, 리듀서 작성하기

import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 110;

const counter = handleActions(
  { [INCREASE]: (state) => state + 1, [DECREASE]: (state) => state - 1 },
  initialState
);

export default counter;
