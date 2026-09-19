import { useTranslation } from 'react-i18next';
import Container from '~/components/components/Container/Container';
import Typography from '~/components/components/Typography/Typography';
import PokemonFilters from '~/components/compositions/PokemonFilters/PokemonFilters';
import { useLayoutFilters } from '~/components/layouts/DefaultLayout/hooks/useLayoutFilters';

const PokedexPage = () => {
  const { t } = useTranslation();

  useLayoutFilters(<PokemonFilters />);

  return (
    <Container>
      <Typography>{t('meta.home.title')}</Typography>
    </Container>
  );
};

export default PokedexPage;
