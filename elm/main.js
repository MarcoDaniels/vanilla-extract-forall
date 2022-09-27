import { Elm } from './Main.elm'
import {button, themeClass} from 'vanilla'

Elm.Main.init({
    node: document.getElementById('elm'),
    flags: {
        theme: themeClass,
        danger: button({type: 'danger', border: 'some', size: 'small'}),
        okay: button({type: 'okay', border: 'some', size: 'small'})
    }
})