<script setup lang="ts">
import {ButtonVariants, button} from "vanilla"

defineProps<{
  handler: () => void,
  text: string
  variant: ButtonVariants
}>()

</script>

<template>
  <button :class="button(variant)" @click="handler">
    {{ text }}
  </button>
</template>