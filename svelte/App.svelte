<script lang="ts">
    import {box, text, themeSvelte} from 'vanilla'
    import Button from './Button.svelte'

    let withTheme = true

    function setTheme() {
        withTheme = !withTheme
    }
</script>

<main class={`${withTheme ? themeSvelte : ''} ${box({type: 'center', border: 'some'})}`}>
    <h2 class={text({type: 'brand'})}>Svelte</h2>
    <Button handler={setTheme}
            variant={{ border: 'some', size: 'small'}}
            text={withTheme ? "with theme" : "without theme"}
    />
</main>
