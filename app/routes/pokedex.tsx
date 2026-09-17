import { useTranslation } from 'react-i18next';
import Card from '~/components/components/Card/Card';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';
import Typography from '~/components/components/Typography/Typography';

const Pokedex = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        padding: 20,
      }}
    >
      <Card padding="dense" onClick={() => console.log('card clicked')}>
        <Typography as="h1" type="label" color="destructive">
          {t('shared.pokedex')}
        </Typography>
      </Card>
      <ThemeToggle />
    </div>
  );
};

export default Pokedex;
