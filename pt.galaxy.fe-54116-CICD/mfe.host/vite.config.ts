import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { RemoteObjectConfig } from "@module-federation/vite/lib/utils/normalizeModuleFederationOptions";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

type remoteConfigType = Record<string, Record<string, RemoteObjectConfig>>;
type getRemotesConfigProps = { mode: string; env: Record<string, string> };

const envDir: string = "./../";

const getRemotesConfig = ({
  mode,
  env,
}: getRemotesConfigProps): Record<string, RemoteObjectConfig> => {
  const remotesConfig: remoteConfigType = {
    development: {
      mfeAssistant: {
        type: "module",
        name: "mfeAssistant",
        entry: `${env.VITE_ASSISTANT_URL}/remoteEntry.js`,
      },
    },
    production: {
      mfeAssistant: {
        type: "module",
        name: "mfeAssistant",
        entry: `${env.VITE_ASSISTANT_URL}/remoteEntry.js`,
      },
    },
    qa: {
      mfeAssistant: {
        type: "module",
        name: "mfeAssistant",
        entry: `${env.VITE_ASSISTANT_URL}/remoteEntry.js`,
      },
    },
  };
  
  return remotesConfig[mode] || remotesConfig["development"];
};

export default defineConfig(({ mode }) => {
  const env: Record<string, string> = loadEnv(mode, envDir);
  const port: number = Number(env.VITE_HOST_PORT);

  const remotes = getRemotesConfig({ mode, env });

  return {
    envDir,
    mode,
    base: "./",
    plugins: [
      react(),
      federation({
        name: "ctt_mfe_host",
        manifest: true,
        remotes,
        shared: dependencies,
      }),
    ],
    build: {
      target: "esnext",
      cssCodeSplit: true,
    },
    server: { port },
    preview: { port },
  };
});
