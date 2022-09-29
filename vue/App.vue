<script setup lang="ts">
import {box} from "vanilla"
import ButtonComponent from "./ButtonComponent.vue"
import {ref} from "vue"

const danger = ref(true)

const setDanger = () => {
  danger.value = !danger.value
}
</script>

<template>
  <div :class="box({type: 'center', border: 'some'})">
    <ButtonComponent
        :handler="setDanger"
        :variant="{type:  danger ? 'danger' : 'okay', border: 'some', size: 'small'}"
        text="I'm in danger"
    />
  </div>
</template>
