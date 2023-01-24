import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "./src/main.ts"),
      fileName: "main",
      formats: ["es", "cjs"],
    },
  },
  plugins: [dts()],
});
