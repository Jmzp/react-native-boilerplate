import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
  },
});

function Button({ style, textStyle, title, ...rest }) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};

export default Button;
