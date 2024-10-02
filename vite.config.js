import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";
import { webfontDownload } from 'vite-plugin-webfont-dl';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer(), webfontDownload()],
})
