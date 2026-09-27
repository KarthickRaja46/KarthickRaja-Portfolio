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
});
