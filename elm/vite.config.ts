import { defineConfig } from 'vite'
import { plugin } from 'vite-plugin-elm'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [vanillaExtractPlugin(), plugin()]
})
