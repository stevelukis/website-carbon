/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCK_API: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}