import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Pokemon } from '~/api/models/Pokemon';
import StatBar from '~/components/components/StatBar/StatBar';
import Typography from '~/components/components/Typography/Typography';
import { getPokemonStats } from '~/constants/stat-bar';
import { TypographyTypes } from '~/constants/typography';
import classes from './PokemonStats.module.scss';

type PokemonStatsProps = {
  pokemon: Pokemon;
  showTotal?: boolean;
  showBasicStats?: boolean;
};

const PokemonStats = ({
  pokemon,
  showTotal = false,
  showBasicStats = false,
}: PokemonStatsProps) => {
  const { t } = useTranslation();

  const stats = useMemo(() => {
    const statsByName = new Map(
      pokemon.stats?.map(({ stat, base_stat }) => [stat.name, base_stat]),
    );

    const allStats = getPokemonStats().map((stat) => ({
      ...stat,
      value: statsByName.get(stat?.key) || 0,
    }));

    if (showBasicStats) {
      return allStats.slice(0, 3);
    }

    return allStats;
  }, [pokemon.stats, showBasicStats]);

  const total = useMemo(
    () => stats.reduce((acc, current) => acc + current.value, 0),
    [stats],
  );

  return (
    <div className={classes.container}>
      <Typography
        type={TypographyTypes.LABEL}
        color="muted-foreground"
        uppercase
      >
        {t('shared.baseStats')}
      </Typography>
      {stats?.map((stat) => (
        <StatBar
          key={stat?.key}
          label={stat?.label}
          value={stat?.value}
          color={stat?.color}
        />
      ))}
      {showTotal && (
        <Typography
          type={TypographyTypes.LABEL}
          color="muted-foreground"
          uppercase
        >
          {`${t('shared.total')}: ${total}`}
        </Typography>
      )}
    </div>
  );
};

export default PokemonStats;
