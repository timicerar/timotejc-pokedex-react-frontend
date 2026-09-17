import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
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
      <Card onClick={() => console.log('card clicked')} fullWidth>
        <Typography as="h1" type="label" color="destructive">
          {t('shared.pokedex')}
        </Typography>
      </Card>
      <ThemeToggle />
      <Button variant="primary">{t('shared.pokedex')}</Button>
      <Button variant="destructive" disabled>
        {t('shared.pokedex')}
      </Button>
      <Button variant="ghost">{t('shared.pokedex')}</Button>
      <Button variant="secondary">{t('shared.pokedex')}</Button>
    </div>
  );
};

export default Pokedex;
