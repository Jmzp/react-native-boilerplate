import React, { useCallback } from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';

const AndroidBackHandlerWrapper = (props) => {
  useFocusEffect(
    useCallback(() => {
      const { onBackPress } = props;
      const onBackPressTemp = () => {
        onBackPress();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPressTemp);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPressTemp);
    }, [props.onBackPress]),
  );

  const { children } = props;
  return children;
};

AndroidBackHandlerWrapper.propTypes = {
  onBackPress: PropTypes.func,
  children: PropTypes.node.isRequired,
};

AndroidBackHandlerWrapper.defaultProps = {
  onBackPress: () => {},
};

export default AndroidBackHandlerWrapper;
