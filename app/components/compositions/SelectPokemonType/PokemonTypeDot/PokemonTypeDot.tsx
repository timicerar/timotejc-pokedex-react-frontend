import classNames from 'classnames';
import type { PokemonTypeDotProps } from '~/components/compositions/SelectPokemonType/PokemonTypeDot/PokemonTypeDot.interface';
import { Colors } from '~/constants/colors';
import classes from './PokemonTypeDot.module.scss';

const PokemonTypeDot = ({ color, className }: PokemonTypeDotProps) => {
  return (
    <span
      className={classNames(classes.dot, className)}
      style={{ backgroundColor: Colors[color] }}
    />
  );
};

export default PokemonTypeDot;
