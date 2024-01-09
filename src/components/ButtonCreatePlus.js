import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TextStyles } from '_theme';

const styles = StyleSheet.create({
  createButton: {
    width: 91,
    height: 31,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonText: {
    ...TextStyles.boldText,
    fontSize: 13,
    lineHeight: 16,
    color: '#374559',
  },
});

const ButtonCreatePlus = ({ onPress }) => (
  <TouchableOpacity
    accessibilityRole="button"
    style={styles.createButton}
    onPress={onPress}
  >
    <Text style={styles.createButtonText}>+</Text>
  </TouchableOpacity>
);

ButtonCreatePlus.propType = {
  onPress: PropTypes.func.isRequired,
};

export default ButtonCreatePlus;
