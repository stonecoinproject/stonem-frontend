import createActionCreator, { StandardAction } from '../../utils/createActionCreator';
import { Dispatch } from 'redux';
import { LOAD_HOME } from './constants';

export type LoadHomeAction = StandardAction<{ isLoading: boolean }>;

const loadHomeImpl = createActionCreator(LOAD_HOME, (isLoading: boolean) => ({ isLoading }));
export const loadHome = () => (dispatch: Dispatch<any>) => {
    dispatch(loadHomeImpl(true));
};
