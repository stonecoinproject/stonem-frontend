import createActionCreator, { StandardAction } from '../../utils/createActionCreator';
import { Dispatch } from 'redux';
import { LOAD_WALLET_MANAGER } from './constants';

export type LoadWalletManagerAction = StandardAction<{ isLoading: boolean }>;

const loadWalletManagerImpl = createActionCreator(LOAD_WALLET_MANAGER, (isLoading: boolean) => ({ isLoading }));
export const loadMasternodesManager = () => (dispatch: Dispatch<any>) => {
    dispatch(loadWalletManagerImpl(true));
};
