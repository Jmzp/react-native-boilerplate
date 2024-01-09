import { action, computed, flow, makeAutoObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { showErrorMessage } from '_utils/flash';
import strings from '_localization';

class UserStore {
  currentUser = null;

  constructor() {
    makeAutoObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      login: flow,
      logout: flow,
      currentUserFullName: computed,
    });
    makePersistable(this, {
      name: 'UserStore',
      properties: ['currentUser'],
    });
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  *login(phone) {
    try {
      console.log('SIGN IN');
    } catch (e) {
      showErrorMessage(strings.error.loginMessageError);
    }
  }

  *logout() {
    console.log('LOG OUT');
  }
}

export default UserStore;
