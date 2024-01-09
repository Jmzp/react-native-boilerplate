import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { startNetworkLogging } from 'react-native-network-logger';
import ENV from 'react-native-config';
import { name as appName } from './app.json';
import App from './src/App';

if (ENV.ENV !== 'PROD') {
  startNetworkLogging();
}

AppRegistry.registerComponent(appName, () => App);
