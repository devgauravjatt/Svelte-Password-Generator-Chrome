import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
	build: {
		rollupOptions: {
			output: {
				// Customize the main JavaScript entry file name
				entryFileNames: 'main.js',

				// Customize the CSS output file name
				assetFileNames: 'main.css', // CSS will be written as 'main.css'
			},
		},
	},
})
