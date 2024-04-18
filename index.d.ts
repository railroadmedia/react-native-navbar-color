import { NativeModules } from 'react-native'

let NavigationBar = NativeModules.RNNavBarColor;

type NavigationBar = {
  getAPILevel: () => void,
  setColor: (color) => void,
  setStatusBarColor: (color, animation) => void,
  setStatusBarTheme: (theme, animation) => void,
};

declare module 'react-native-navbar-color' {
  export const NavigationBar: NavigationBar;
}
