// theme.tsx
'use client';
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#e84393', // Your primary color
    },
    secondary: {
      main: '#6C757D', // Your secondary color
    },
    success: {
        main: '#000000',
    },
    info : {
        main: '#e17055',
    },
    
    // You can customize other colors here as well
  },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: 16,
//           fontWeight: 600,
//           textTransform: 'capitalize',
//           '&.MuiButton-secondary': {
//             borderRadius: '5rem',
//           },
//         }
//       },
//     },
//   },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Your desired font family
    fontSize: 16, // Your base font size
    // Customize typography styles here
  },
  // You can customize other theme properties here
});

export default theme;
