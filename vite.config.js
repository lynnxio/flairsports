import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/scss/app.scss'
            ],
            refresh: true,
        })
    ],
    server: {
        host: '192.168.56.56',
        watch: {
            usePolling: true,
        },
    },
});
