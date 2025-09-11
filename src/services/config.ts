const withSlash = (s: string) => (s.endsWith("/") ? s : `${s}/`);

export const POKEAPI_BASE_URL = withSlash(
  import.meta.env.VITE_POKEAPI_BASE_URL || "https://pokeapi.co/api/v2/"
);
