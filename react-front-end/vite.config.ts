import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import TailwindConfigAsSingletonPlugin from "./rollup-plugin-tailwind-config-as-singleton.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TailwindConfigAsSingletonPlugin()],
});
