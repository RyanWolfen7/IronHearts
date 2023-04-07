import { createTheme } from '@mui/material/styles';
import typography from './typography';

const mainTheme = createTheme({
  typography,
  status: {
    danger:'#660000'
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ffffff'
    },
    text: {
      primary: '#ffffff',
      secondary: '#000'
    },
  },
});

export default mainTheme;
