import { showMessage } from 'react-native-flash-message';

export const showSuccessfulMessage = (text) => {
  showMessage({
    message: text,
    type: 'success',
    icon: { icon: 'success', position: 'left' },
  });
};

export const showDefaultMessage = (text) => {
  showMessage({
    message: text,
    type: 'default',
    icon: { icon: 'info', position: 'left' },
  });
};

export const showErrorMessage = (text) => {
  showMessage({
    message: text,
    type: 'danger',
    icon: { icon: 'danger', position: 'left' },
  });
};
