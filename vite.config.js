import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/site.js'
        ])
    ],
    optimizeDeps: {
        include: ["jquery"],
    },
    envPrefix: 'MIX_',
    server: {
        host: '192.68.56.10',
        watch: {
            usePolling: true,
        },
    },
});
