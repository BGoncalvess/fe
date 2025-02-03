/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MFE_ASSISTANT: string;
  readonly VITE_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
