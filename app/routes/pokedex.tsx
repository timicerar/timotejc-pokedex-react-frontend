import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import Card from '~/components/components/Card/Card';
import ProgressBar from '~/components/components/ProgressBar/ProgressBar';
import StatBar from '~/components/components/StatBar/StatBar';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';
import Typography from '~/components/components/Typography/Typography';
import { StatColors } from '~/constants/stat-bar';

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

      <div style={{ width: '100%' }}>
        <StatBar
          label="Shimmer"
          color={StatColors.HP}
          value={78}
          minWidth={300}
          maxWidth={600}
          shimmer
        />
        <StatBar label="HP" color={StatColors.HP} value={78} maxWidth={600} />
        <StatBar label="Attack" color={StatColors.ATTACK} value={84} />
        <StatBar
          label="Defense"
          color={StatColors.DEFENSE}
          value={78}
          maxWidth={600}
        />
        <StatBar
          label="Sp. Atk"
          color={StatColors.SPECIAL_ATTACK}
          value={230}
          maxWidth={600}
        />
      </div>
    </div>
  );
};

export default Pokedex;
