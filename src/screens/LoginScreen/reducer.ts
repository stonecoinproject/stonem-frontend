import handleActions from '../../utils/handleActions';
import { LoadLoginAction } from './actions';
import { LOAD_LOGIN } from './constants';

export interface LoginScreenState {
  isLoading: boolean;
}

const initialState: LoginScreenState = { isLoading: false };

// tslint:disable:function-name
export default handleActions({
  [LOAD_LOGIN](state, { payload }: LoadLoginAction) {
    return {
      ...state,
      name: payload.isLoading,
    };
  },
},                           initialState);
