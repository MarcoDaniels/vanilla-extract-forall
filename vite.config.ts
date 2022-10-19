import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import vue from '@vitejs/plugin-vue'
import { plugin } from 'vite-plugin-elm'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
    plugins: [vanillaExtractPlugin(), react(), svelte(), vue(), plugin()],
    base: '',
})
