import handleActions from '../../utils/handleActions';
import { LoadHomeAction } from './actions';
import { LOAD_HOME } from './constants';

export interface HomeScreenState {
  isLoading: boolean;
}

const initialState: HomeScreenState = { isLoading: false };

// tslint:disable:function-name
export default handleActions({
  [LOAD_HOME](state, { payload }: LoadHomeAction) {
    return {
      ...state,
      name: payload.isLoading,
    };
  },
}, initialState);
