import { useTranslation } from 'react-i18next';
import type { Pokemon } from '~/api/models/Pokemon';
import Container from '~/components/components/Container/Container';
import Tab from '~/components/components/Tabs/Tab/Tab';
import TabContent from '~/components/components/Tabs/TabContent/TabContent';
import Tabs from '~/components/components/Tabs/Tabs';
import TabsList from '~/components/components/Tabs/TabsList/TabsList';
import PokemonAboutTab from '~/components/compositions/PokemonTabs/PokemonAboutTab/PokemonAboutTab';
import PokemonBaseStatsTab from '~/components/compositions/PokemonTabs/PokemonBaseStatsTab/PokemonBaseStatsTab';
import PokemonEvolutionChainTab from '~/components/compositions/PokemonTabs/PokemonEvolutionChainTab/PokemonEvolutionChainTab';
import PokemonMovesTab from '~/components/compositions/PokemonTabs/PokemonMovesTab/PokemonMovesTab';
import { PokemonDetailsTabs } from '~/constants/pokemon-details-tabs';
import classes from './PokemonTabs.module.scss';

type PokemonTabsProps = {
  pokemon: Pokemon;
};

const PokemonTabs = ({ pokemon }: PokemonTabsProps) => {
  const { t } = useTranslation();

  return (
    <Tabs defaultValue={PokemonDetailsTabs.ABOUT} className={classes.tabs}>
      <div className={classes.tabsBar}>
        <TabsList>
          <Tab value={PokemonDetailsTabs.ABOUT} uppercase>
            {t('pokemonDetails.tabs.about')}
          </Tab>
          <Tab value={PokemonDetailsTabs.BASE_STATS} uppercase>
            {t('pokemonDetails.tabs.baseStats')}
          </Tab>
          <Tab value={PokemonDetailsTabs.EVOLUTION_CHAIN} uppercase>
            {t('pokemonDetails.tabs.evolutionChain')}
          </Tab>
          <Tab value={PokemonDetailsTabs.MOVES} uppercase>
            {t('pokemonDetails.tabs.moves')}
          </Tab>
        </TabsList>
      </div>
      <Container>
        <TabContent value={PokemonDetailsTabs.ABOUT}>
          <PokemonAboutTab pokemon={pokemon} />
        </TabContent>
        <TabContent value={PokemonDetailsTabs.BASE_STATS}>
          <PokemonBaseStatsTab pokemon={pokemon} />
        </TabContent>
        <TabContent value={PokemonDetailsTabs.EVOLUTION_CHAIN}>
          <PokemonEvolutionChainTab pokemon={pokemon} />
        </TabContent>
        <TabContent value={PokemonDetailsTabs.MOVES}>
          <PokemonMovesTab pokemon={pokemon} />
        </TabContent>
      </Container>
    </Tabs>
  );
};

export default PokemonTabs;
