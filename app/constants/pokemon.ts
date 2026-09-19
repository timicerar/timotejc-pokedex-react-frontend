import { getStaleGcTime } from '~/api';

export const POKEMON_LIST_LIMIT = 25;
export const POKEMON_GC_TIME = getStaleGcTime(8 * 60);
