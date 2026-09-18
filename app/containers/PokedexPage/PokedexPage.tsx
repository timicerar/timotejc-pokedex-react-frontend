import { useState } from 'react';
import NavBar from '~/components/compositions/NavBar/NavBar';
import SelectPokemonGeneration from '~/components/compositions/SelectPokemonGeneration/SelectPokemonGeneration';
import SelectPokemonType from '~/components/compositions/SelectPokemonType/SelectPokemonType';
import classes from './PokedexPage.module.scss';

const PokedexPage = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGeneration, setSelectedGeneration] = useState('');

  return (
    <>
      <NavBar />

      <div className={classes.container}>
        <SelectPokemonType
          multiple
          value={selectedTypes}
          onChange={(next) => setSelectedTypes(next as string[])}
        />

        <SelectPokemonGeneration
          multiple
          value={selectedGeneration}
          onChange={(next) => setSelectedGeneration(next as string)}
        />
      </div>
    </>
  );
};

export default PokedexPage;
