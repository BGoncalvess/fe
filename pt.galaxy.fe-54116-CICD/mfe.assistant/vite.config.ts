import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

const envDir: string = "./../";

export default defineConfig(({ mode }) => {
  const env: Record<string, string> = loadEnv(mode, envDir);
  const port: number = Number(env.VITE_ASSISTANT_PORT);

  return {
    envDir,
    mode,
    base: "./",
    plugins: [
      react(),
      federation({
        name: "ctt_mfe_assistant",
        filename: "remoteEntry.js",
        exposes: { "./assistantApp": "./src/App.tsx" },
        shared: dependencies,
      }),
    ],
    build: {
      target: "esnext",
    },
    server: { port },
    preview: { port },
  };
});
