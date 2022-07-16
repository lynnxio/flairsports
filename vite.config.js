import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input:[
                'resources/js/site.js',
                'resources/scss/app.scss'
            ],refresh: true,
        })
    ],
    envPrefix: 'MIX_',
    server: {
        host: '192.168.56.56',
        watch: {
            usePolling: true,
            interval: 1000
        },
    },
});
