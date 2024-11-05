import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
    build: {
        lib: {
            name: "use-typing-animation",
            entry: path.resolve(__dirname, 'src/index.js'),
        },
        outDir: "./dist"
    },
})
