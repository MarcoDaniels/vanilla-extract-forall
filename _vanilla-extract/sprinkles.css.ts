import {createSprinkles, defineProperties} from "@vanilla-extract/sprinkles"
import {themeVars} from "./theme.css"

export const sprinkles = createSprinkles(defineProperties({
    defaultCondition: 'small',
    conditions: {
        small: {},
        large: {'@media': '(min-width: 800px)'}
    },
    properties: {
        fontFamily: themeVars.font,
        color: themeVars.color,
        backgroundColor: themeVars.background,
        // -
        display: ['flex', 'grid'],
        justifyContent: ['center'],
        alignItems: ['center'],
        flexDirection: ['column', 'row'],
        gridGap: themeVars.space,
        gridTemplateColumns: {
            3: 'repeat(3, 1fr)',
            1: 'repeat(1, 1fr)'
        },
        // -
        border: {
            'none': 'none',
            'some': '2px solid'
        },
        borderRadius: {
            'none': '0',
            'some': '15px'
        },
        borderColor: themeVars.color,
        // -
        paddingTop: themeVars.space,
        paddingBottom: themeVars.space,
        paddingLeft: themeVars.space,
        paddingRight: themeVars.space,
        // -
        marginTop: themeVars.space,
        marginBottom: themeVars.space,
        marginLeft: themeVars.space,
        marginRight: themeVars.space,
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight']
    }
}))

export type Sprinkles = Parameters<typeof sprinkles>[0]