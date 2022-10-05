import { Elm } from './Main.elm'
import {box, button} from 'vanilla'

Elm.Main.init({
    node: document.getElementById('elm'),
    flags: {
        wrapper: box({type: 'center', border: 'some'}),
        danger: button({type: 'danger', border: 'some', size: 'small'}),
        okay: button({type: 'okay', border: 'some', size: 'small'})
    }
})