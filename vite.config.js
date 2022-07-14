import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/site.js'
        ]),
        {
            name: 'antlers',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.antlers.html')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        }
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
