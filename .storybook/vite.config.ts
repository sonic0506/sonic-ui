import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  });
};
// https://vitejs.dev/config/
export default app;
