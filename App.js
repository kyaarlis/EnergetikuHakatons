import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import OptionsScreen from './src/screens/OptionsScreen';
import DeviceScreen from './src/screens/DeviceScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Options: OptionsScreen,
    Device: DeviceScreen,
  }
);

export default createAppContainer(navigator);
