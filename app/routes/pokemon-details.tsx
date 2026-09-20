import { useTranslation } from 'react-i18next';
import { getPokemon } from '~/api/pokemon';
import { PokemonQueryKeys } from '~/api/pokemon/queryKeys';
import HelmetMetadata from '~/components/components/HelmetMetadata/HelmetMetadata';
import PokemonDetailsPage from '~/containers/PokemonDetailsPage/PokemonDetailsPage';
import { prefetchQuery } from '~/lib/queryClient';
import type { Route } from './+types/pokemon-details';

export const clientLoader = ({ params }: Route.ClientLoaderArgs) => {
  const name = params?.pokemon || '';

  prefetchQuery({
    queryKey: PokemonQueryKeys.pokemonDetails({ name }),
    queryFn: () => getPokemon({ name }),
  });
};

const PokemonDetails = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetMetadata
        title={t('meta.details.title')}
        description={t('meta.details.description')}
      />
      <PokemonDetailsPage />
    </>
  );
};

export default PokemonDetails;
