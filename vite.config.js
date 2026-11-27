import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { profile } from './src/data/profile.js';

// Fills %PROFILE_EMAIL% in index.html from src/data/profile.js, so the email lives in one place.
const profileHtml = {
  name: 'profile-html',
  transformIndexHtml: (html) => html.replaceAll('%PROFILE_EMAIL%', profile.email),
};

export default defineConfig({
  plugins: [react(), profileHtml],
  build: {
    // Hashed build output gets its own folder so vercel.json can cache it as immutable
    // without touching the unhashed files in public/assets.
    assetsDir: 'static',
    rollupOptions: {
      output: {
        // Rarely-changing libraries in their own chunks: editing content.js no longer
        // invalidates the cached React / animation code for returning visitors.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (/node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react';
          if (/node_modules[\\/](motion|motion-dom|motion-utils|framer-motion|lenis)[\\/]/.test(id)) return 'motion';
          return 'vendor';
        },
      },
    },
  },
});
