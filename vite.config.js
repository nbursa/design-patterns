import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  base: '/',
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          VITE_GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID,
        },
      },
    }),
  ],
});
