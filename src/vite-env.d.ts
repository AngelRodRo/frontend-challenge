/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly FRONTEND_CHALLENGE_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
