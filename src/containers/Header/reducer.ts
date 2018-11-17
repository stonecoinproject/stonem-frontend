import handleActions from '../../utils/handleActions';
import { LoadJokeAction } from './actions';
import { LOAD_JOKE } from './constants';

export interface HeaderState {
  name: string;
}

const initialState: HeaderState = { name: '' };

// tslint:disable:function-name
export default handleActions({
  [LOAD_JOKE](state, { payload }: LoadJokeAction) {
    return {
      ...state,
      joke: payload.joke,
    };
  },
}, initialState);
