import { createTheme } from '@mui/material/styles';
import { dark, light } from '@mui/material/styles/createPalette';

export const theme = createTheme({
  palette: {
    customOrange: {
      main: '#F15F2B',
      light: 'rgba(241, 95, 43, 0.1)'
    },
    customGray: {
      main: '#D9D9D9',
      light: '#F3F3F3',
      dark:"#9E9E9E"
    },
    textColor:{
        main:"#463F3F"
    }
  },
});