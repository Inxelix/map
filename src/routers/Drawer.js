import { createDrawerNavigator } from 'react-navigation'; // 1.0.3

import MainStack from './MainStack';
import ChatStack from './ChatStack';
import {
  CustomDrawerComponent,
} from '../containers';
import {
  colors,
} from '../constants';

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: MainStack,
    },
    Chat: {
      screen: ChatStack,
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: colors.primaryColor,
    },
  },
);  

export default Drawer;
