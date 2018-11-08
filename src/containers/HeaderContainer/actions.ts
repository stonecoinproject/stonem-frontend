import { Dispatch } from 'redux';
import createActionCreator, { StandardAction } from '../../utils/createActionCreator';
import { LOAD_JOKE } from './constants';

export type LoadJokeAction = StandardAction<{ joke: string }>;

const loadJokeImpl = createActionCreator(LOAD_JOKE, (joke: string) => ({ joke }));

export const loadJoke = () => (dispatch: Dispatch<any>) => {
  const req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const res = JSON.parse(this.responseText);
      dispatch(loadJokeImpl(res.value.joke));
    }
  };
  req.send();
};
