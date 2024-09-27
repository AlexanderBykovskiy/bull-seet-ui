import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [
        react(),
        dts({insertTypesEntry: true,}),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'bull-sheet-ui',
            formats: ['es', 'umd'],
            fileName: (format) => `bull-sheet-ui.${format === 'umd' ? 'umd.cjs' : 'js'}`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
