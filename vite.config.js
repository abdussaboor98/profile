import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    root: 'app',
    publicDir: '../public',
    plugins: [react()],
    server: { port: 4321, strictPort: true },
    preview: { port: 4321, strictPort: true },
    build: { outDir: '../build', emptyOutDir: true },
});
