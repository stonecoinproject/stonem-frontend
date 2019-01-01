import handleActions from '../../utils/handleActions';
import { LoadMasternodesManagerAction } from './actions';
import { LOAD_MASTERNODES_MANAGER } from './constants';

export interface MasternodesManagerScreenState {
  isLoading: boolean;
}

const initialState: MasternodesManagerScreenState = { isLoading: false };

// tslint:disable:function-name
export default handleActions({
  [LOAD_MASTERNODES_MANAGER](state, { payload }: LoadMasternodesManagerAction) {
    return {
      ...state,
      name: payload.isLoading,
    };
  },
},                           initialState);
