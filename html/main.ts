import {box, button, baseTheme} from "vanilla"

const app = document.querySelector<HTMLDivElement>('#html')!

const element = document.createElement('button')

const wrapper = document.createElement('div')

wrapper.className = box({type: 'center', border: 'some'})

const title = document.createElement('h2')

title.innerText = 'HTML'

wrapper.appendChild(title)

wrapper.appendChild(element)

app.className = baseTheme + ' ' + box({type: 'grid'})

app.appendChild(wrapper)

const buttonHandler = () => {
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