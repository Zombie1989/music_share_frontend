interface ImportMetaEnv {
    VITE_API_URL: string;
    // Lägg till andra miljövariabler om du behöver dem
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }