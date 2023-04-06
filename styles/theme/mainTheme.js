import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import typography from './typography';

const mainTheme = createTheme({
  typography,
  status: {
    danger:'#660000'
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#70798C',
    },
    secondary: {
      main: '#F5F1ED',
    },
    accentPrimary: {
      main: '#DAD2BC',
    },
    accentSecondary: {
      main: '#A99985',
    },
    shadow: {
      main: '#252323',
    },
  },
});

export default responsiveFontSizes(mainTheme);
