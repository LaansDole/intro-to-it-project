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
        MuiSnackbar: {
          anchorOriginBottomCenter: {
          },
        },
        MuiSnackbarContent: {
          message: {
            fontWeight: "bolder",
            color: "#EC5E6F",
          },
          root: {
            borderRadius: "30px",
            backgroundColor: "#5EECDB",
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
            color: "#EC5E6F",
            boxShadow: "rgba(0, 0, 0, 0.15) 2px 2px 2.6px",
            fontWeight: "bold",
            height: "75px",
            borderRadius: "30px",
          },
        }
    }
  });
  
export default function AppTheme({children}) {

    return (
        <ThemeProvider theme={themeOverride}>{children}</ThemeProvider>   
    )
}