<script lang="ts">
    import {box} from 'vanilla'
    import Button from './Button.svelte'

    let danger = true

    function setDanger() {
        danger = !danger
    }
</script>

<main class={box({type: 'center', border: 'some'})}>
    <Button handler={setDanger}
            variant={{type: danger ? 'danger' : 'okay', border: 'some', size: 'small'}}
            text={danger ? "I'm in danger" : "I'm okay!"}
    />
</main>
