import {themeClass} from "vanilla"
import {useState} from "react"
import {ButtonComponent} from "./Button"

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
