import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        watch: {
            // Exclude the root /assets folder to avoid EBUSY errors on locked media files
            ignored: ['**/assets/**'],
        },
    },
    build: {
        target: 'esnext',
        emptyOutDir: true,
        minify: true,
        rollupOptions: {
            output: {
            },
        },
    },
})
