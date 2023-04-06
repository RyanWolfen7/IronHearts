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
    text: {
      primary: '#ffffff',
    },
  },
});

export default mainTheme;
