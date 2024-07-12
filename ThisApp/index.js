// import { registerRootComponent } from 'expo';
// import App from './App';

// registerRootComponent(App);

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
