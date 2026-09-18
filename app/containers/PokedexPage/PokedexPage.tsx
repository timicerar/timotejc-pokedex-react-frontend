import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import Card from '~/components/components/Card/Card';
import Image from '~/components/components/Image/Image';
import StatBar from '~/components/components/StatBar/StatBar';
import Tab from '~/components/components/Tabs/Tab/Tab';
import TabContent from '~/components/components/Tabs/TabContent/TabContent';
import Tabs from '~/components/components/Tabs/Tabs';
import TabsList from '~/components/components/Tabs/TabsList/TabsList';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';
import Typography from '~/components/components/Typography/Typography';
import { StatColors } from '~/constants/stat-bar';
import classes from './PokedexPage.module.scss';

const PokedexPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Card onClick={() => console.log('card clicked')} fullWidth>
        <Typography as="h1" type="label">
          {t('shared.pokedex')}
        </Typography>
      </Card>
      <ThemeToggle />

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
    </div>
  );
};

export default PokedexPage;
