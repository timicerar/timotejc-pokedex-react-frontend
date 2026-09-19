import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import Container from '~/components/components/Container/Container';
import Typography from '~/components/components/Typography/Typography';
import PokemonFilters from '~/components/compositions/PokemonFilters/PokemonFilters';
import { useLayoutFilters } from '~/components/layouts/DefaultLayout/hooks/useLayoutFilters';
import { useModalProvider } from '~/components/providers/ModalProvider/hooks/useModalProvider';
import { ModalTypes } from '~/constants/modal-provider';

const PokedexPage = () => {
  const { t } = useTranslation();
  const { openModal } = useModalProvider();

  useLayoutFilters(<PokemonFilters />);

  return (
    <Container>
      <Typography>{t('meta.home.title')}</Typography>
      <Button
        onClick={() =>
          openModal({
            type: ModalTypes.POKEMON_DETAILS,
            data: { name: 'Charizard' },
          })
        }
      >
        Details
      </Button>
    </Container>
  );
};

export default PokedexPage;
