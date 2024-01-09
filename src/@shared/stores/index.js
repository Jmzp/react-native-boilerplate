import React from 'react';
import { configurePersistable } from 'mobx-persist-store';
import { MMKV } from 'react-native-mmkv';
import ErrorStore from './Error.store';
import UserStore from '_@shared/stores/User.store';

const storage = new MMKV();

configurePersistable({
  storage: {
    setItem: (key, data) => storage.set(key, data),
    getItem: (key) => storage.getString(key),
    removeItem: (key) => storage.delete(key),
  },
});

class RootStore {
  constructor() {
    this.errorStore = new ErrorStore(this);
    this.userStore = new UserStore(this);
  }
}

const StoresContext = React.createContext(new RootStore());

// this will be the function available for the app to connect to the stores
export const useStores = () => React.useContext(StoresContext);
