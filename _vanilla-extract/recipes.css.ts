import {recipe, RecipeVariants} from "@vanilla-extract/recipes"
import {sprinkles} from "./sprinkles.css"

export const box = recipe({
    base: sprinkles({
        marginTop: 'none',
        paddingTop: 'large',
        paddingBottom: 'large',
        color: 'primary',
        backgroundColor: 'primary'
    }),
    variants: {
        type: {
            grid: sprinkles({display: 'grid', gridGap: 'small', gridTemplateColumns: {small: 1, large: 3}}),
            center: sprinkles({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            })
        },
        border: {
            some: sprinkles({border: 'some', borderRadius: 'some'}),
            none: sprinkles({border: 'none'})
        }
    }
})

export type BoxVariants = RecipeVariants<typeof box>

export const text = recipe({
    base: sprinkles({fontFamily: 'brand', backgroundColor: 'primary'}),
    variants: {
        type: {
            brand: sprinkles({color: 'brand'}),
            primary: sprinkles({color: 'primary'}),
        }
    }
})

export type TextVariants = RecipeVariants<typeof text>

export const button = recipe({
    base: sprinkles({backgroundColor: 'primary', color: 'primary', border: 'none'}),
    variants: {
        size: {
            small: sprinkles({padding: 'small'}),
            large: sprinkles({padding: 'large'})
        },
        border: {
            some: sprinkles({border: 'some', borderRadius: 'some', borderColor: 'primary'}),
            none: sprinkles({border: 'none'})
        }
    }
})

export type ButtonVariants = RecipeVariants<typeof button>