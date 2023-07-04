import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';


//Global Background Options

// const styles = {
//   global: props => ({
//     body: {
//       color: mode('gray.800', 'whiteAlpha.900')(props),
//       bg: mode('gray.100', '#141214')(props),
//     },
//   }),
// };

// const components = {
//   Drawer: {
//     // setup light/dark mode component defaults
//     baseStyle: props => ({
//       dialog: {
//         bg: mode('white', '#141214')(props),
//       },
//     }),
//   },
// };

export default extendTheme({
  colors: {
    dark: {
      100: '#ade0ff',
      200: '#7fddfd',
      300: '#4ecdfa',
      400: '#21bff8',
      500: '#07a6de',
      600: '#0081ae',
      700: '#005c7d',
      800: '#00384e',
      900: '#00141f',
    },
    light: {
      100: '#f3e1bf',
      200: '#e8ba96',
      300: '#e09f6e',
      400: '#d78344',
      500: '#be6a2a',
      600: '#935221',
      700: '#6a3b17',
      800: '#40230c',
      900: '#190b00',
    },
  },
 
  // styles,
  // components
});
