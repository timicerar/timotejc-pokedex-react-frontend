import { getStaleGcTime } from '~/api';

export const POKEMON_LIST_LIMIT = 50;
export const POKEMON_LIST_ALL_LIMIT = 10000;
export const POKEMON_GC_TIME = getStaleGcTime(8 * 60);
