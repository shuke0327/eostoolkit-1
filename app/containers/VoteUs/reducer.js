/*
 *
 * voteUs reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

const initialState = fromJS({
  form: null,
});

function voteUsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('form', action.form);
    default:
      return state;
  }
}

export default voteUsReducer;
