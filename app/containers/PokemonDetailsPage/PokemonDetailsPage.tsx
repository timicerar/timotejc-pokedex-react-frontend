import { useTranslation } from 'react-i18next';
import Container from '~/components/components/Container/Container';
import Typography from '~/components/components/Typography/Typography';

const PokemonDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography>{t('meta.details.title')}</Typography>
    </Container>
  );
};

export default PokemonDetailsPage;
