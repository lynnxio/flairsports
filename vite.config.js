import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/scss/app.scss'
            ],
            refresh: true
        }),
        {
            name: 'antlers',
            handleHotUpdate({file, server}) {
                if (file.endsWith('.antlers.html')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        }
    ],
    server: {
        host: '192.168.56.56',
        watch: {
            usePolling: true,
            interval: 1000
        },
    }
});
