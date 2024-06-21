import { ipcRenderer } from 'electron';
import { Store } from 'vuex';
import { IStoreState } from '.';

export const mutationPlugin = (store: Store<IStoreState>) => {
  // send a message to main process every time
  // there is a mutation.
  store.subscribe((mutation, state) => {
    ipcRenderer.send('vuex-mutation', mutation);
  });
};
