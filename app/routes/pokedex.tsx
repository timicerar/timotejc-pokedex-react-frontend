import { useTranslation } from 'react-i18next';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';
import Typography from '~/components/components/Typography/Typography';

const Pokedex = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography as="h1" type="label" color="destructive">
        {t('shared.pokedex')}
      </Typography>
      <ThemeToggle />
    </>
  );
};

export default Pokedex;
