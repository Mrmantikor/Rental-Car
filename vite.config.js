import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables.scss";
          @import "./src/styles/reset.scss";
          @import "./src/styles/container.scss";
          @import "./src/styles/fonts.scss";
          
        `,
      },
    },
  },
});
