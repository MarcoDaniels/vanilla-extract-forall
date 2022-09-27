import {button} from "vanilla"
import type {ButtonVariants} from "vanilla"
import type {FC} from "react"

export type ButtonComponentProps = {
    handler: () => void
    text: string
    variant: ButtonVariants
}

export const ButtonComponent: FC<ButtonComponentProps> = ({text, handler, variant}) =>
    <button className={button(variant)} onClick={handler}>
        {text}
    </button>