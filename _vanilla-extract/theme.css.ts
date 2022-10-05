import {createTheme} from "@vanilla-extract/css"

const space = {
    none: '0',
    small: '10px',
    medium: '15px',
    large: '30px',
}

export const [baseTheme, themeVars] = createTheme({
    color: {
        brand: '#000',
        primary: '#000',
    },
    background: {
        primary: '#FFF'
    },
    font: {
        brand: '',
    },
    space
})

export const themeReact = createTheme(themeVars, {
    color: {
        brand: '#61dafb',
        primary: '#FFF'
    },
    background: {
        primary: '#000',
    },
    font: {
        brand: 'Roboto,sans-serif',
    },
    space
})