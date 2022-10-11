<script setup lang="ts">
import {box, themeVue, text} from "vanilla"
import ButtonComponent from "./ButtonComponent.vue"
import {ref} from "vue"

const withTheme = ref(true)

const setTheme = () => {
  withTheme.value = !withTheme.value
}
</script>

<template>
  <div :class="(withTheme ? themeVue : '' ) + ' ' + box({type: 'center', border: 'some'})">
    <h2 :class="text({type: 'brand'})">Vue.js</h2>
    <ButtonComponent
        :handler="setTheme"
        :variant="{border: 'some', size: 'small'}"
        :text="withTheme ? 'with theme' : 'without theme'"
    />
  </div>
</template>
