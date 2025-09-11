// src/types/Pokemon.ts
export type Pokemon = {
  id: number;
  name: string;
  types: { type: { name: string } }[]; // <- array
  weight: number;
  height: number;
  stats: { base_stat: number; stat: { name: string } }[]; // <- array
};
