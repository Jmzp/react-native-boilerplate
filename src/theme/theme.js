import { configureFonts, DefaultTheme } from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 'normal',
    },
  },
};

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6FAF7F',
    accent: '#04AEAB',
    accentTwo: '#EA5B0C',
    placeholder: '#B0B0B0',
    placeholderTwo: '#71758B',
    labelColor: '#374559',
    iconGray: '#757575',
    black: 'black',
    white: 'white',
    error: '#EB5757',
  },
  fonts: configureFonts(fontConfig),
};
