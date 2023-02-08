/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import * as path from 'path';

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles:['./tests/setup.ts'],
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //     '@components': path.resolve(__dirname, 'src/components'),
  //   },
  // },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'PWA-Robofriends',
        short_name: 'Robofriend',
        description: 'PWA version of robofriend',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
