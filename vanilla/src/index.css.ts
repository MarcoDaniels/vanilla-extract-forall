import {createSprinkles, defineProperties} from "@vanilla-extract/sprinkles"
import {createTheme} from "@vanilla-extract/css"

export const [themeClass, themeVars] = createTheme({
    color: {
        wall: '#FFF',
        text: '#FFF',
        textInverse: '#000',
        okay: '#47c225',
        danger: '#fc0303',
    },
    space: {
        small: '10px',
        large: '20px',
    },
    gap: {
        small: '15px',
        large: '30px'
    }
})

export const styles = createSprinkles(defineProperties({
    defaultCondition: 'small',
    conditions: {
        small: {},
        large: {'@media': '(min-width: 800px)'}
    },
    properties: {
        color: themeVars.color,
        backgroundColor: themeVars.color,
        // -
        paddingTop: themeVars.space,
        paddingBottom: themeVars.space,
        paddingLeft: themeVars.space,
        paddingRight: themeVars.space,
        // -
        marginTop: themeVars.gap,
        marginBottom: themeVars.gap,
        marginLeft: themeVars.gap,
        marginRight: themeVars.gap,
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'marginRight']
    }
}))


export type Styles = Parameters<typeof styles>[0]