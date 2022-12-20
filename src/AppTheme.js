import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const themeOverride = createTheme({
    props: {
      // Name of the component
      MuiButtonBase: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application
      },
    },
    overrides: {
        MuiChip: {
            label: {
                fontFamily: "Times New Roman",
                color: "white",
                fontWeight: "bold",
            }
        },
        MuiSnackbarContent: {
          message: {
            fontWeight: "bolder",
            color: "white",
          },
          root: {
            borderRadius: "30px",
            backgroundColor: "#F50057",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        },
        MuiDialog: {
          paper: {
            borderRadius: "40px",
          }
        },
        MuiBottomNavigationAction: {
          wrapper: {
            fontWeight: "bold",
            height: "75px",
          },
          root: {
            '&:hover': {
              textDecoration: "underline",
            },
            '&$selected': {
              color: "#F50057",
            }
          }
        },
        MuiIconButton: {
          root: {
            color: "#adafbb",
          }
        },
    }
  });
  
export default function AppTheme({children}) {

    return (
        <ThemeProvider theme={themeOverride}>{children}</ThemeProvider>   
    )
}