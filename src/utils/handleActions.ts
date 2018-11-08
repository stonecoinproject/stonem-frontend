import { StandardAction } from './createActionCreator';

type ActionHandler<T> = (state: T, action: StandardAction<any>) => T;
type ActionHandlerSuccessError<T> = { success: ActionHandler<T>, error: ActionHandler<T> };
interface HandlerMap<T> {
  [action: string]: ActionHandler<T> | ActionHandlerSuccessError<T>;
}

function isSuccessErrorHandler<T>(
  handler: ActionHandler<T> | ActionHandlerSuccessError<T>): handler is ActionHandlerSuccessError<T> {
  const actionHandler = handler as ActionHandlerSuccessError<T>;
  return typeof actionHandler.success === 'function' && typeof actionHandler.error === 'function';
}

export default function handleActions<T>(handlerMap: HandlerMap<T>, initialState: T): ActionHandler<T> {
  const normalizedHandlers: { [action: string]: ActionHandlerSuccessError<T> } = {};
  for (const action of Object.keys(handlerMap)) {
    const actionHandler = handlerMap[action];
    if (isSuccessErrorHandler(actionHandler)) {
      normalizedHandlers[action] = actionHandler;
    } else {
      normalizedHandlers[action] = { success: actionHandler, error: actionHandler };
    }
  }

  return function (state: T = initialState, action: StandardAction<any>) {
    const handler = normalizedHandlers[action.type];
    if (handler) {
      return (action.error ? handler.error : handler.success)(state, action);
    }

    return state;
  };
}
