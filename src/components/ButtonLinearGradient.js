import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '_constants';
import TextStyles from '_theme/TextStyles';

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 28,
  },
  touchableContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableIconContainer: {
    marginLeft: 5,
  },
  text: {
    ...TextStyles.poppinsSemiBoldText,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

const ButtonLinearGradient = ({
  containerStyle,
  touchableStyle,
  textStyle,
  title,
  linearGradientColors,
  disabled,
  disabledButPressable,
  icon,
  onPress,
  ...rest
}) => {
  let linearGradientColorsTemp = COLORS.disabledButtonColors;
  let loginButtonTextColor = { color: '#9799A3' };
  if (!disabled && !disabledButPressable) {
    linearGradientColorsTemp = linearGradientColors;
    loginButtonTextColor = { color: 'white' };
  }
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={linearGradientColorsTemp}
      style={[styles.buttonContainer, containerStyle]}
    >
      <TouchableOpacity
        style={[styles.touchableContainer, touchableStyle]}
        onPress={onPress}
        disabled={disabled}
        {...rest}
      >
        <View>
          <Text style={[styles.text, loginButtonTextColor, textStyle]}>{title}</Text>
        </View>
        {icon && <View style={styles.touchableIconContainer}>{icon}</View>}
      </TouchableOpacity>
    </LinearGradient>
  );
};

ButtonLinearGradient.propTypes = {
  containerStyle: PropTypes.object,
  touchableStyle: PropTypes.object,
  textStyle: PropTypes.object,
  linearGradientColors: PropTypes.array,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  disabledButPressable: PropTypes.bool,
  icon: PropTypes.node,
  onPress: PropTypes.func.isRequired,
};

ButtonLinearGradient.defaultProps = {
  containerStyle: null,
  touchableStyle: null,
  textStyle: null,
  linearGradientColors: COLORS.enabledButtonColors,
  title: '',
  disabled: false,
  disabledButPressable: false,
  icon: null,
};

export default ButtonLinearGradient;
