import {box, themeReact, text} from "vanilla"
import {useState} from "react"
import {ButtonComponent} from "./Button"

const App = () => {
    const [withTheme, setWithTheme] = useState(true)

    return (
        <div className={`${withTheme ? themeReact : ''} ${box({type: 'center', border: 'some'})}`}>
            <h2 className={text({type: 'brand'})}>React.js</h2>

            <ButtonComponent
                handler={() => setWithTheme(!withTheme)}
                text={withTheme ? "with theme" : "without theme"}
                variant={{ border: 'some', size: 'small'}}
            />
        </div>
    )
}

export default App
