import handleActions from '../../utils/handleActions';
import { LoadSignupAction } from './actions';
import { LOAD_SIGNUP } from './constants';

export interface SignupScreenState {
  isLoading: boolean;
}

const initialState: SignupScreenState = { isLoading: false };

// tslint:disable:function-name
export default handleActions({
  [LOAD_SIGNUP](state, { payload }: LoadSignupAction) {
    return {
      ...state,
      name: payload.isLoading,
    };
  },
},                           initialState);
