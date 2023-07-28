import * as React from 'react';
import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        green: {
            main: '#119E2B',
            light: '#1AEB40',
            dark: '#0C6B1D',
            contrast_light: '#47AE5A',
            contrast_dark: '#60EB7A',
        },
        red: {
            main: '',
            light: '',
            dark: '',
            contrast_light: '',
            contrast_dark: ''
        }

    },
})

export default theme;

