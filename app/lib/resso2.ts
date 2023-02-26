// import { useSyncExternalStore } from 'use-sync-external-store/shim';
// import { useSyncExternalStore } from 'https://esm.sh/v91/use-sync-external-store@1.2.0/es2022/shim.bundle.js';
import {useSyncExternalStore} from 'react';
type Callback = () => void;
type State = Record<string, unknown>;
type Store<T> = {
  [K in keyof T]: {
    subscribe: (listener: Callback) => Callback;
    getSnapshot: () => T[K];
    useSnapshot: () => T[K];
    setSnapshot: (val: T[K]) => void;
  };
};

const resso = <T extends State>(state: T): Store<T> => {
  if (Object.prototype.toString.call(state) !== '[object Object]') {
    throw new Error('object required');
  }

  const store: Store<T> = {} as Store<T>;

  Object.keys(state).forEach((key: keyof T) => {
    if (typeof state[key] === 'function') return;

    const listeners = new Set<Callback>();

    store[key] = {
      subscribe: (listener) => {
        console.log({addLis:listener})
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
      getSnapshot: () => state[key],
      setSnapshot: (val) => {
        if (val === state[key]) return;
        state[key] = val;
        listeners.forEach((listener) => listener());
      },
      useSnapshot: () => {
        console.log({useSnapshot:"xxx"})
        return useSyncExternalStore(
          store[key].subscribe,
          store[key].getSnapshot,
        );
      },
    };
  });
  return store

};

export default resso;
