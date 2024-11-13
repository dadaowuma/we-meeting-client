import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root_dir = './src';
const output_dir = '../dist'; // 相对于root dir

// https://vitejs.dev/config/
export default defineConfig({
  root: root_dir,
  plugins: [vue()],
  build: {
    outDir: output_dir
  }
})