import {button, ButtonVariants} from "vanilla"
import {FC} from "react"

export type ButtonComponentProps = {
    handler: () => void
    text: string
    variant: ButtonVariants
}

export const ButtonComponent: FC<ButtonComponentProps> = ({text, handler, variant}) =>
    <button className={button(variant)} onClick={handler}>
        {text}
    </button>