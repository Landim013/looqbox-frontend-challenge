// src/apis/fetchPokemonList.ts
import type { Pokemon } from '../constants/Pokemon';

const makePokemon = (
  id: number,
  name: string,
  types: string[],
  weight: number,
  height: number,
  base: { hp: number; attack: number; defense: number; speed: number },
): Pokemon => ({
  id,
  name,
  types: types.map((t) => ({ type: { name: t } })),
  weight,
  height,
  stats: [
    { base_stat: base.hp, stat: { name: 'hp' } },
    { base_stat: base.attack, stat: { name: 'attack' } },
    { base_stat: base.defense, stat: { name: 'defense' } },
    { base_stat: base.speed, stat: { name: 'speed' } },
  ],
});

// 24 itens para testar várias páginas
const DATA: Pokemon[] = [
  makePokemon(1, 'bulbasaur', ['grass', 'poison'], 69, 7, {
    hp: 45,
    attack: 49,
    defense: 49,
    speed: 45,
  }),
  makePokemon(2, 'ivysaur', ['grass', 'poison'], 130, 10, {
    hp: 60,
    attack: 62,
    defense: 63,
    speed: 60,
  }),
  makePokemon(3, 'venusaur', ['grass', 'poison'], 1000, 20, {
    hp: 80,
    attack: 82,
    defense: 83,
    speed: 80,
  }),
  makePokemon(4, 'charmander', ['fire'], 85, 6, { hp: 39, attack: 52, defense: 43, speed: 65 }),
  makePokemon(5, 'charmeleon', ['fire'], 190, 11, { hp: 58, attack: 64, defense: 58, speed: 80 }),
  makePokemon(6, 'charizard', ['fire', 'flying'], 905, 17, {
    hp: 78,
    attack: 84,
    defense: 78,
    speed: 100,
  }),
  makePokemon(7, 'squirtle', ['water'], 90, 5, { hp: 44, attack: 48, defense: 65, speed: 43 }),
  makePokemon(8, 'wartortle', ['water'], 225, 10, { hp: 59, attack: 63, defense: 80, speed: 58 }),
  makePokemon(9, 'blastoise', ['water'], 855, 16, { hp: 79, attack: 83, defense: 100, speed: 78 }),
  makePokemon(10, 'caterpie', ['bug'], 29, 3, { hp: 45, attack: 30, defense: 35, speed: 45 }),
  makePokemon(11, 'metapod', ['bug'], 99, 7, { hp: 50, attack: 20, defense: 55, speed: 30 }),
  makePokemon(12, 'butterfree', ['bug', 'flying'], 320, 11, {
    hp: 60,
    attack: 45,
    defense: 50,
    speed: 70,
  }),
  makePokemon(13, 'weedle', ['bug', 'poison'], 32, 3, {
    hp: 40,
    attack: 35,
    defense: 30,
    speed: 50,
  }),
  makePokemon(14, 'kakuna', ['bug', 'poison'], 100, 6, {
    hp: 45,
    attack: 25,
    defense: 50,
    speed: 35,
  }),
  makePokemon(15, 'beedrill', ['bug', 'poison'], 295, 10, {
    hp: 65,
    attack: 90,
    defense: 40,
    speed: 75,
  }),
  makePokemon(16, 'pidgey', ['normal', 'flying'], 18, 3, {
    hp: 40,
    attack: 45,
    defense: 40,
    speed: 56,
  }),
  makePokemon(17, 'pidgeotto', ['normal', 'flying'], 300, 11, {
    hp: 63,
    attack: 60,
    defense: 55,
    speed: 71,
  }),
  makePokemon(18, 'pidgeot', ['normal', 'flying'], 395, 15, {
    hp: 83,
    attack: 80,
    defense: 75,
    speed: 101,
  }),
  makePokemon(19, 'rattata', ['normal'], 35, 3, { hp: 30, attack: 56, defense: 35, speed: 72 }),
  makePokemon(20, 'raticate', ['normal'], 185, 7, { hp: 55, attack: 81, defense: 60, speed: 97 }),
  makePokemon(21, 'spearow', ['normal', 'flying'], 20, 3, {
    hp: 40,
    attack: 60,
    defense: 30,
    speed: 70,
  }),
  makePokemon(22, 'fearow', ['normal', 'flying'], 380, 12, {
    hp: 65,
    attack: 90,
    defense: 65,
    speed: 100,
  }),
  makePokemon(23, 'ekans', ['poison'], 69, 20, { hp: 35, attack: 60, defense: 44, speed: 55 }),
  makePokemon(24, 'arbok', ['poison'], 650, 35, { hp: 60, attack: 95, defense: 69, speed: 80 }),
];

export const TOTAL = DATA.length;

export async function fetchPokemonList(
  page: number,
  pageSize = 12,
): Promise<{ results: Pokemon[]; total: number }> {
  // simula latência
  await new Promise((r) => setTimeout(r, 200));
  const start = (page - 1) * pageSize;
  return { results: DATA.slice(start, start + pageSize), total: TOTAL };
}
