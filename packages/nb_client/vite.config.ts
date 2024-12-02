import dotenv from 'dotenv';
dotenv.config({ path: `../../.env` });
import { defineConfig } from 'vite';
import path from 'node:path';
import electron from 'vite-plugin-electron/simple';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        electron({
            main: {
                // Shortcut of `build.lib.entry`.
                entry: 'electron/main.ts',
            },
            preload: {
                // Shortcut of `build.rollupOptions.input`.
                // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
                input: path.join(__dirname, 'electron/preload.ts'),
            },
            // Ployfill the Electron and Node.js API for Renderer process.
            // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
            // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
            renderer:
                process.env.NODE_ENV === 'test'
                    ? // https://github.com/electron-vite/vite-plugin-electron-renderer/issues/78#issuecomment-2053600808
                      undefined
                    : {},
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: `http://127.0.0.1:${process.env.NB_SERVER_PORT}`,
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
        watch: {
            usePolling: true, // 修复HMR热更新失效
        },
        port: Number(process.env.NB_CLIENT_PORT) || 5173,
    },
});
