<script lang="ts">
    import type {ButtonVariants} from "vanilla"
    import {button} from 'vanilla'

    export let handler: () => void
    export let text: string
    export let variant: ButtonVariants
</script>

<button on:click={handler} class={button(variant)}>
    {text}
</button>