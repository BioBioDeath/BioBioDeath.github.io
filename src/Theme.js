import { createTheme } from '@mui/material';
const theme = createTheme({
    typography: {
        fontFamily: 'Bungee',
        button: {
            textTransform: 'lowercase',
            fontFamily: 'Bungee',
        },
    },
    palette: {
        primary: {
            main: '#fff',
        },
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    padding: 4,
                },
            },
        },
    },
});

export default theme;