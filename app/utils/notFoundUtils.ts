import i18n from 'i18next';
import type { NotFoundData } from '~/components/compositions/NotFound/NotFound.interface';
import { type NotFoundType, NotFoundTypes } from '~/constants/not-found';
import { Routes } from '~/constants/routes';

export const getNotFoundData = (type: NotFoundType): NotFoundData => {
  switch (type) {
    case NotFoundTypes.POKEMON_DETAILS:
      return {
        title: i18n?.t('notFound.pokemonDetails.title'),
        description: i18n?.t('notFound.pokemonDetails.description'),
        button: {
          label: i18n?.t('shared.backToPokedex'),
          to: Routes.POKEDEX(),
        },
      };
    case NotFoundTypes.POKEMON_LIST:
      return {
        title: i18n?.t('notFound.pokemonList.title'),
        description: i18n?.t('notFound.pokemonList.description'),
      };
    case NotFoundTypes.POKEMON_DETAILS_MODAL:
      return {
        title: i18n?.t('notFound.pokemonDetails.title'),
        description: i18n?.t('notFound.pokemonDetails.description'),
      };
    case NotFoundTypes.GENERIC:
      return {
        code: i18n?.t('notFound.404'),
        title: i18n?.t('notFound.generic.title'),
        description: i18n?.t('notFound.generic.description'),
        button: {
          label: i18n?.t('shared.goHome'),
          to: Routes.POKEDEX(),
        },
      };
    case NotFoundTypes.POKEMON_MOVE:
      return {
        title: i18n?.t('notFound.pokemonMove.title'),
      };
    case NotFoundTypes.POKEMON_EVOLUTION_CHAIN:
      return {
        title: i18n?.t('notFound.pokemonEvolutionChain.title'),
        description: i18n?.t('notFound.pokemonEvolutionChain.description'),
      };
    default:
      return type satisfies never;
  }
};
