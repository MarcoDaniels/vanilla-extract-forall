import { Elm } from './Main.elm'
import {box, button, themeElm, text} from 'vanilla'

Elm.Main.init({
    node: document.getElementById('elm'),
    flags: {
        themeElm: themeElm,
        wrapper: box({type: 'center', border: 'some'}),
        brand: text({type: 'brand'}),
        button: button({border: 'some', size: 'small'}),
    }
})