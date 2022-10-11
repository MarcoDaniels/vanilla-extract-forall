import {box, button, baseTheme, text} from "vanilla"

const body = document.querySelector<HTMLDivElement>('body')!

const buttonEl = document.createElement('button')

const app = document.createElement('div')

const title = document.createElement('h2')
title.innerText = 'HTML'
title.className = text({type: 'brand'})

app.className = box({type: 'center', border: 'some'})
app.appendChild(title)
app.appendChild(buttonEl)

body.appendChild(app)

const buttonHandler = () => {
    let theme = false

    const setTheme = () => {
        theme = !theme
        buttonEl.innerHTML = theme ? "with theme" : "without theme"
        buttonEl.className = button({border: 'some', size: 'small'})

        body.className = (theme ? baseTheme : '') + ' ' + box({type: 'grid'})
    }

    buttonEl.addEventListener('click', () => setTheme())
    setTheme()
}

buttonHandler()