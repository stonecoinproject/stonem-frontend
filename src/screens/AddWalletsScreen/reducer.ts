import handleActions from '../../utils/handleActions';
import { LoadAddWalletsScreenAction } from './actions';
import { LOAD_ADD_WALLETS_ACTION } from './constants';

export interface AddWalletsScreenState {
  isLoading: boolean;
}

const initialState: AddWalletsScreenState = { isLoading: false };

// tslint:disable:function-name
export default handleActions({
  [LOAD_ADD_WALLETS_ACTION](state, { payload }: LoadAddWalletsScreenAction) {
    return {
      ...state,
      name: payload.isLoading,
    };
  },
}, initialState);
