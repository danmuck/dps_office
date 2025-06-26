'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});



const theme2 = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },

  },
});



const theme = createTheme({
  colorSchemes: { 
    light: {
    palette: {
      contrastThreshold: 4.5,
      mode: 'light',
      background: {
        default: '#efefef',
        paper: '#506e75',
      },
      primary: {
        main: '#000000',
        light: '#222',
        dark: '#111',
        contrastText: '#fff',
      },
      secondary: {
        main: '#ffffff',
        light: '#aaaaaa',
        dark: '#555555',
        contrastText: '#000',
      },
      error: {
        main: '#7d0000',
        light: '#942f2f',
        dark: '#941616',
        contrastText: '#444',
      },
      warning: {
        main: '#dec71b',
        light: '#dbda58',
        dark: '#d9cc3b',
        contrastText: '#444',
      },
      info: {
        main: '#04c4de',
        light: '#238b99',
        dark: '#284b63',
        contrastText: '#444',
      },
      success: {
        main: '#02d4a3',
        light: '#18967d',
        dark: '#40614c',
        contrastText: '#444',
      },
      text: { 
        primary: '#000000',
        secondary: '#aaa',
        disabled: '#BDBDBD',
      },
    },
  }, 
  dark: {
      palette: {
        contrastThreshold: 4.5,
        mode: 'dark',
        background: {
          default: '#30403d', // #252b2a
          paper: '#506e75', // #879996 #384f54
        },
        primary: {
          main: '#ffffff',  
          light: '#aaaaaa',
          dark: '#555555',
          contrastText: '#000',
        },
        secondary: {
          main: '#000000',
          light: '#222',
          dark: '#111',
          contrastText: '#fff',
        },
        error: {
          main: '#941616',
          light: '#942f2f',
          dark: '#7d0000',
          contrastText: '#444',
        },
        warning: {
          main: '#d9cc3b',
          light: '#dbda58',
          dark: '#dec71b',
          contrastText: '#444',
        },
        info: {
          main: '#284b63',
          light: '#238b99',
          dark: '#04c4de',
          contrastText: '#444',
        },
        success: {
          main: '#40614c',
          light: '#18967d',
          dark: '#02d4a3',
          contrastText: '#444',
        },
        text: { 
          primary: '#ffffff',
          secondary: '#000',
          disabled: '#BDBDBD',
        },
}}},
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          color: '#000',
          elevation: 2,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;