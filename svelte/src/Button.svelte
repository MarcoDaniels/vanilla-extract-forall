<script lang="ts">
    import type {ButtonVariants} from "vanilla"
    import {button} from 'vanilla'

    export let variant: ButtonVariants
    export let text: string
    export let handler: () => void
</script>

<button on:click={handler} class={button(variant)}>
    {text}
</button>