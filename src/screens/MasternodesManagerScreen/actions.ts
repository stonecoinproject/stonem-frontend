import createActionCreator, { StandardAction } from '../../utils/createActionCreator';
import { Dispatch } from 'redux';
import { LOAD_MASTERNODES_MANAGER } from './constants';

export type LoadMasternodesManagerAction = StandardAction<{ isLoading: boolean }>;

const loadMasternodesManagerImpl = createActionCreator(LOAD_MASTERNODES_MANAGER, (isLoading: boolean) => ({ isLoading }));
export const loadMasternodesManager = () => (dispatch: Dispatch<any>) => {
    dispatch(loadMasternodesManagerImpl(true));
};
