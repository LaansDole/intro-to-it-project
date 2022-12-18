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
            color: "aquamarine",
          },
          root: {
            borderRadius: "30px",
            backgroundColor: "#EC5E6F",
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
            color: "red",
            boxShadow: 'rgba(19, 4, 40, 1) 0px 5px, rgba(37, 16, 67, 0.7) 0px 10px, rgba(56, 18, 109, 0.7) 0px 15px, rgba(38, 16, 69, 1) 0px 20px',
            fontWeight: "bold",
            height: "75px",
            borderRadius: "30px",
          },
        },
        MuiIconButton: {
          root: {
            color: "#7127BA",
          }
        },
    }
  });
  
export default function AppTheme({children}) {

    return (
        <ThemeProvider theme={themeOverride}>{children}</ThemeProvider>   
    )
}