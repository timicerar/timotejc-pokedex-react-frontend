import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '~/components/components/ThemeToggle';
import { Typography } from '~/components/components/Typography';

const Pokedex = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography as="h1" type="display-4xl">
        {t('shared.pokedex')}
      </Typography>
      <ThemeToggle />
    </>
  );
};

export default Pokedex;
