function id<T>(e: T): T {
  return e;
}

export interface StandardAction<T> {
  type: string;
  payload: T;
  error: boolean;
}

// tslint:disable:max-line-length
export default function createActionCreator<T1, R>(type: string, payloadGenerator?: (t1: T1) => R): (t1: T1) => StandardAction<R>;
export default function createActionCreator<T1, T2, R>(type: string, payloadGenerator?: (t1: T1, t2: T2) => R): (t1: T1, t2: T2) => StandardAction<R>;
export default function createActionCreator<T1, T2, T3, R>(type: string, payloadGenerator?: (t1: T1, t2: T2, t3: T3) => R): (t1: T1, t2: T2, t3: T3) => StandardAction<R>;
export default function createActionCreator<T1, T2, T3, T4, R>(type: string, payloadGenerator?: (t1: T1, t2: T2, t3: T3, t4: T4) => R): (t1: T1, t2: T2, t3: T3, t4: T4) => StandardAction<R>;
export default function createActionCreator<T1, T2, T3, T4, T5, R>(type: string, payloadGenerator?: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => StandardAction<R>;
// tslint:enable
export default function createActionCreator<T>(type: string, payloadGenerator: (...args: any[]) => T = id) {
  return function (...args: any[]) {
    const payload = payloadGenerator(...args);
    return {
      type,
      payload,
      error: payload instanceof Error,
    };
  };
}
