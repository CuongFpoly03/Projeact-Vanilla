import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
});
