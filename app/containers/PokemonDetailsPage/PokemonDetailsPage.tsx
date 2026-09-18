import { useTranslation } from 'react-i18next';
import Typography from '~/components/components/Typography/Typography';

const PokemonDetailsPage = () => {
  const { t } = useTranslation();

  return <Typography>{t('meta.details.title')}</Typography>;
};

export default PokemonDetailsPage;
