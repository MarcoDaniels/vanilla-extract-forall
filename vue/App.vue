<script setup lang="ts">
import {themeClass} from "vanilla"
import ButtonComponent from "./ButtonComponent.vue"
import {ref} from "vue"

const danger = ref(true)

const setDanger = () => {
  danger.value = !danger.value
}
</script>

<template>
  <div :class="themeClass">
    <ButtonComponent
        :handler="setDanger"
        :variant="{type:  danger ? 'danger' : 'okay', border: 'some', size: 'small'}"
        text="I'm in danger"
    />
  </div>
</template>
