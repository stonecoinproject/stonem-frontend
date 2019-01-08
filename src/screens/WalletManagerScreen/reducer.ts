import handleActions from '../../utils/handleActions';
import { LoadWalletManagerAction } from './actions';
import { LOAD_WALLET_MANAGER } from './constants';

export interface WalletManagerScreenState {
  isLoading: boolean;
}

const initialState: WalletManagerScreenState = { isLoading: false };

// tslint:disable:function-name
export default handleActions({
  [LOAD_WALLET_MANAGER](state, { payload }: LoadWalletManagerAction) {
    return {
      ...state,
      name: payload.isLoading,
    };
  },
},                           initialState);
