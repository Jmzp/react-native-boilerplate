import { ActivityIndicator, withTheme } from 'react-native-paper';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loadingIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoadingIndicator = ({ theme: { colors } }) => (
  <View style={styles.loadingIndicatorContainer}>
    <ActivityIndicator animating={true} size="large" color={colors.accentTwo} />
  </View>
);

export default withTheme(LoadingIndicator);
