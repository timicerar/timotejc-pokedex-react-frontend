import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import Card from '~/components/components/Card/Card';
import Image from '~/components/components/Image/Image';
import Input from '~/components/components/Input/Input';
import Select from '~/components/components/Select/Select';
import StatBar from '~/components/components/StatBar/StatBar';
import Tab from '~/components/components/Tabs/Tab/Tab';
import TabContent from '~/components/components/Tabs/TabContent/TabContent';
import Tabs from '~/components/components/Tabs/Tabs';
import TabsList from '~/components/components/Tabs/TabsList/TabsList';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';
import Typography from '~/components/components/Typography/Typography';
import { Colors } from '~/constants/colors';
import { PokemonTypes } from '~/constants/pokemon-types';
import { StatColors } from '~/constants/stat-bar';
import classes from './PokedexPage.module.scss';

const generationOptions = [
  { value: 'gen1', label: 'Generation I', range: '#001–#151' },
  { value: 'gen2', label: 'Generation II', range: '#152–#251' },
  { value: 'gen3', label: 'Generation III', range: '#252–#386' },
  { value: 'gen4', label: 'Generation IV', range: '#387–#493' },
];

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'number', label: 'Number' },
  { value: 'height', label: 'Height' },
  { value: 'weight', label: 'Weight' },
];

const PokedexPage = () => {
  const { t } = useTranslation();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGeneration, setSelectedGeneration] = useState('');
  const [sortBy, setSortBy] = useState('');

  const typeOptions = useMemo(
    () =>
      Object.values(PokemonTypes).map((type) => ({
        value: type,
        label: type.charAt(0).toUpperCase() + type.slice(1),
        color: Colors[`type-${type}` as keyof typeof Colors],
      })),
    [],
  );

  return (
    <div className={classes.container}>
      <Card onClick={() => console.log('card clicked')}>
        <Typography as="h1" type="label">
          {t('shared.pokedex')}
        </Typography>
      </Card>
      <ThemeToggle />

      <Input
        placeholder="Search by name or number…"
        leadingIcon={<FontAwesomeIcon icon={faSearch} />}
        autoComplete="off"
        maxWidth={600}
      />

      <Select
        label="Type"
        placeholder="All Types"
        resetLabel="All Types"
        options={typeOptions}
        multiple
        value={selectedTypes}
        onChange={(next) => setSelectedTypes(next as string[])}
        maxWidth={280}
        renderOption={(option, { selected }) => (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              color: selected ? 'var(--primary)' : undefined,
            }}
          >
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                width: 12,
                height: 12,
                visibility: selected ? 'visible' : 'hidden',
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                flexShrink: 0,
                borderRadius: 'var(--radius-full)',
                background: option.color,
                border: '2px solid rgba(0, 0, 0, 0.18)',
              }}
            />
            <Typography as="span" type="body-sm">
              {option.label}
            </Typography>
          </span>
        )}
      />

      <Select
        label="Generation"
        options={generationOptions}
        value={selectedGeneration}
        onChange={(next) => setSelectedGeneration(next as string)}
        maxWidth={280}
        renderOption={(option, { selected }) => (
          <span
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              color: selected ? 'var(--primary)' : undefined,
            }}
          >
            <Typography as="span" type="body-sm">
              {option.label}
            </Typography>
            <Typography as="span" type="body-sm" color="muted-foreground">
              {option.range}
            </Typography>
          </span>
        )}
      />

      <Button
        variant="primary"
        leadingIcon={<FontAwesomeIcon icon={faAccessibleIcon} />}
      >
        {t('shared.pokedex')}
      </Button>
      <Button variant="destructive">{t('shared.pokedex')}</Button>
      <Button variant="ghost">{t('shared.pokedex')}</Button>
      <Button variant="secondary">{t('shared.pokedex')}</Button>

      <StatBar label="HP" color={StatColors.HP} value={78} maxWidth={600} />
      <StatBar
        label="Attack"
        color={StatColors.ATTACK}
        value={84}
        maxWidth={600}
      />
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

      <Tabs defaultValue="about">
        <TabsList wrap={false}>
          <Tab value="about">About</Tab>
          <Tab value="stats">Base Stats</Tab>
          <Tab value="evolution">Evolution Chain</Tab>
          <Tab value="moves">Moves</Tab>
        </TabsList>
        <TabContent value="about" hideOutline>
          <Typography as="p" type="body">
            A brief flavor-text description of the Pokémon goes here.
          </Typography>
        </TabContent>
        <TabContent value="stats" hideOutline>
          <StatBar label="HP" color={StatColors.HP} value={78} maxWidth={600} />
        </TabContent>
        <TabContent value="evolution" hideOutline>
          <Typography as="p" type="body">
            Evolution chain content goes here.
          </Typography>
        </TabContent>
        <TabContent value="moves" hideOutline>
          <Typography as="p" type="body">
            Move list content goes here.
          </Typography>
        </TabContent>
      </Tabs>

      <Image
        src="/images/seo/og-image-square.png"
        alt={t('shared.pokedex')}
        width="600"
        height="600"
        borderRadius={16}
      />

      <Select
        label="Sort by"
        options={sortOptions}
        value={sortBy}
        onChange={(next) => setSortBy(next as string)}
      />
    </div>
  );
};

export default PokedexPage;
