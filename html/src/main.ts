import {button, themeClass} from "vanilla"

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<button id="status"></button>`

app.className = themeClass

const buttonHandler = () => {
    const element = document.querySelector<HTMLButtonElement>('#status')!

    let danger = false
    const setDanger = () => {
        danger = !danger
        element.innerHTML = danger ? "I'm in danger" : "I'm okay"
        element.className = button({type: danger ? 'danger' : 'okay', border: 'some', size: 'small'})
    }

    element.addEventListener('click', () => setDanger())
    setDanger()
}

buttonHandler()