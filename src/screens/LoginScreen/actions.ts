import createActionCreator, { StandardAction } from '../../utils/createActionCreator';
import { Dispatch } from 'redux';
import { LOAD_LOGIN } from './constants';

export type LoadLoginAction = StandardAction<{ isLoading: boolean }>;

const loadLoginImpl = createActionCreator(LOAD_LOGIN, (isLoading: boolean) => ({ isLoading }));
export const loadLogin = () => (dispatch: Dispatch<any>) => {
    dispatch(loadLoginImpl(true));
};
