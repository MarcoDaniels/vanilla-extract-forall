import {createSprinkles, defineProperties} from "@vanilla-extract/sprinkles"
import {createTheme} from "@vanilla-extract/css"
import {recipe, RecipeVariants} from "@vanilla-extract/recipes"

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
        border: {
            'none': 'none',
            'some': '2px solid #000'
        },
        borderRadius: {
            'none': '0',
            'some': '15px'
        },
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
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight']
    }
}))


export type Styles = Parameters<typeof styles>[0]

export const button = recipe({
    base: styles({border: 'none'}),
    variants: {
        type: {
            danger: styles({backgroundColor: 'danger', color: 'text'}),
            okay: styles({backgroundColor: 'okay', color: 'textInverse'}),
        },
        size: {
            small: styles({padding: 'small'}),
            large: styles({padding: 'large'})
        },
        border: {
            some: styles({border: 'some', borderRadius: 'some'}),
            none: styles({border: 'none'})
        }
    }
})

export type ButtonVariants = RecipeVariants<typeof button>