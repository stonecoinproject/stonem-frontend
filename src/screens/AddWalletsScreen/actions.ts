import createActionCreator, { StandardAction } from '../../utils/createActionCreator';
import { Dispatch } from 'redux';
import { LOAD_ADD_WALLETS_ACTION } from './constants';

export type LoadAddWalletsScreenAction = StandardAction<{ isLoading: boolean }>;

const loadAddWalletsScreenActionImpl = createActionCreator(LOAD_ADD_WALLETS_ACTION, (isLoading: boolean) => ({ isLoading }));
export const loadAddWalletsScreenAction = () => (dispatch: Dispatch<any>) => {
    dispatch(loadAddWalletsScreenActionImpl(true));
};
