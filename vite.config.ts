import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
    plugins: [vanillaExtractPlugin(), react(), svelte()]
})
