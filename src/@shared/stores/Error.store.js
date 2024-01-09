import { action, makeAutoObservable, observable } from 'mobx';
import { showErrorMessage } from '_utils/flash';

class ErrorStore {
  currentError = '';

  constructor() {
    makeAutoObservable(this, {
      currentError: observable,
      setCurrentError: action,
    });
  }

  setCurrentError(error) {
    showErrorMessage(error);
    this.currentError = error;
  }
}

export default ErrorStore;
