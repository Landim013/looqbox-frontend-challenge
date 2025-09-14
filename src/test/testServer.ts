import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import type { Pokemon } from '../constants/Pokemon';

const BULBASAUR: Pokemon = {
  id: 1,
  name: 'bulbasaur',
  height: 7,
  weight: 69,
  types: [
    { slot: 1, type: { name: 'grass', url: '' } },
    { slot: 2, type: { name: 'poison', url: '' } },
  ],
  stats: [
    { base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } },
    { base_stat: 49, effort: 0, stat: { name: 'attack', url: '' } },
    { base_stat: 49, effort: 0, stat: { name: 'defense', url: '' } },
    { base_stat: 45, effort: 0, stat: { name: 'speed', url: '' } },
    { base_stat: 65, effort: 0, stat: { name: 'special-defense', url: '' } },
    { base_stat: 65, effort: 0, stat: { name: 'special-attack', url: '' } },
  ],
} as unknown as Pokemon;

const LIST = {
  count: 1,
  next: null,
  previous: null,
  results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
};

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon', ({ request }) => {
    const url = new URL(request.url);
    return HttpResponse.json(LIST, { status: 200 });
  }),

  http.get('https://pokeapi.co/api/v2/pokemon/:name', ({ params }) => {
    const { name } = params as { name: string };
    if (name.toLowerCase() === 'bulbasaur') {
      return HttpResponse.json(BULBASAUR, { status: 200 });
    }
    return HttpResponse.json({ detail: 'Not found' }, { status: 404 });
  }),

  http.get('https://pokeapi.co/api/v2/pokemon/:id', ({ params }) => {
    const { id } = params as { id: string };
    if (id === '1') {
      return HttpResponse.json(BULBASAUR, { status: 200 });
    }
    return HttpResponse.json({ detail: 'Not found' }, { status: 404 });
  }),

  http.get('https://pokeapi.co/api/v2/pokemon-species/:id', ({ params }) => {
    const { id } = params as { id: string };
    if (id === '1') {
      return HttpResponse.json(
        {
          flavor_text_entries: [
            {
              flavor_text: 'A strange seed was planted on its back at birth.',
              language: { name: 'en' },
              version: { name: 'red' },
            },
            {
              flavor_text: 'Uma semente estranha foi plantada em suas costas.',
              language: { name: 'pt' },
              version: { name: 'any' },
            },
          ],
        },
        { status: 200 },
      );
    }
    return HttpResponse.json({ detail: 'Not found' }, { status: 404 });
  }),
];

export const server = setupServer(...handlers);
