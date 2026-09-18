import { useTranslation } from 'react-i18next';
import Typography from '~/components/components/Typography/Typography';
import NavBar from '~/components/compositions/NavBar/NavBar';

const PokemonDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <Typography>{t('meta.details.title')}</Typography>
    </>
  );
};

export default PokemonDetailsPage;
