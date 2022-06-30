import {button, ButtonVariants, themeClass} from "vanilla"
import {FC, useState} from "react"

type ButtonComponentProps = {
    handler: () => void
    text: string
    variant: ButtonVariants
}

const ButtonComponent: FC<ButtonComponentProps> = ({text, handler, variant}) =>
    <button className={button(variant)} onClick={handler}>{text}</button>

const App = () => {
    const [danger, setDanger] = useState(true)

    return (
        <div className={themeClass}>
            <ButtonComponent
                handler={() => setDanger(!danger)}
                text={danger ? "I'm in danger" : "I'm okay!"}
                variant={{type: danger ? 'danger' : 'okay', border: 'some', size: 'small'}}
            />
        </div>
    )
}

export default App
