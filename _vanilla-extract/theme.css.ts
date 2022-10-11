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
        primary: '#20232a',
    },
    font: {
        brand: 'Roboto,sans-serif',
    },
    space
})

export const themeElm = createTheme(themeVars, {
    color: {
        brand: '#0c91d8',
        primary: '#0c91d8'
    },
    background: {
        primary: '#FFF',
    },
    font: {
        brand: '"IBM Plex Sans", sans-serif',
    },
    space
})

export const themeSvelte = createTheme(themeVars, {
    color: {
        brand: '#ff3e00',
        primary: '#ff3e00'
    },
    background: {
        primary: '#f6fafd',
    },
    font: {
        brand: '"Helvetica Neue", sans-serif',
    },
    space
})

export const themeVue = createTheme(themeVars, {
    color: {
        brand: '#42b883',
        primary: '#42b883'
    },
    background: {
        primary: '#FFF',
    },
    font: {
        brand: 'Inter, sans-serif',
    },
    space
})