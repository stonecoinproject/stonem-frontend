import createActionCreator, { StandardAction } from '../../utils/createActionCreator';
import { Dispatch } from 'redux';
import { LOAD_SIGNUP } from './constants';

export type LoadSignupAction = StandardAction<{ isLoading: boolean }>;

const loadSignupImpl = createActionCreator(LOAD_SIGNUP, (isLoading: boolean) => ({ isLoading }));
export const loadSignup = () => (dispatch: Dispatch<any>) => {
    dispatch(loadSignupImpl(true));
};
