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
            color: "#ec5e6f",
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
        }
    }
  });
  
export default function AppTheme({children}) {

    return (
        <ThemeProvider theme={themeOverride}>{children}</ThemeProvider>   
    )
}