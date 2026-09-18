import classNames from 'classnames';
import type { PokemonTypeDotProps } from '~/components/compositions/SelectPokemonType/PokemonTypeDot/PokemonTypeDot.interface';
import classes from '~/components/compositions/SelectPokemonType/PokemonTypeDot/PokemonTypeDot.module.scss';
import { Colors } from '~/constants/colors';

const PokemonTypeDot = ({ color, className }: PokemonTypeDotProps) => {
  return (
    <span
      className={classNames(classes.dot, className)}
      style={{ backgroundColor: Colors[color] }}
    />
  );
};

export default PokemonTypeDot;
