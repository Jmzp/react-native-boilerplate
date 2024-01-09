import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 1,
  },
});

const Divider = () => <View style={styles.divider} />;

export default Divider;
