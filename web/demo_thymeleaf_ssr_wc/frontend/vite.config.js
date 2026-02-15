import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        // 1. Ausgabeverzeichnis auf Spring Boot Static Folder biegen
        // Pfad relativ zur vite.config.js
        outDir: '../src/main/resources/static/wc',

        // 2. Leere das Verzeichnis vor dem Build (Vorsicht: Löscht alles in static/wc!)
        emptyOutDir: true,

        // 3. WICHTIG: Library Mode oder Rollup Options
        // Da wir keine SPA bauen, sondern einzelne Scripts wollen:
        rollupOptions: {
            input: {
                // Definiere deine Einstiegspunkte
                main: './src/index.js',
                // Du kannst hier weitere Komponenten listen
            },
            output: {
                // Sorge für konstante Dateinamen (ohne Hash), damit Thymeleaf sie findet
                // ODER: Nutze Hashes und ein Manifest (Fortgeschritten).
                // Für den Start machen wir es einfach:
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
})