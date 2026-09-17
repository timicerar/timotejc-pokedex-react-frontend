import { useTranslation } from 'react-i18next';
import HelmetMetadata from '~/components/components/HelmetMetadata/HelmetMetadata';
import PokemonDetailsPage from '~/containers/PokemonDetailsPage/PokemonDetailsPage';

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
