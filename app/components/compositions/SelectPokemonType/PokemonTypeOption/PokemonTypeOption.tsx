import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Typography from '~/components/components/Typography/Typography';
import PokemonTypeDot from '~/components/compositions/SelectPokemonType/PokemonTypeDot/PokemonTypeDot';
import type { PokemonTypeOptionProps } from '~/components/compositions/SelectPokemonType/PokemonTypeOption/PokemonTypeOption.interface';
import classes from './PokemonTypeOption.module.scss';

const PokemonTypeOption = ({ option, selected }: PokemonTypeOptionProps) => {
  return (
    <span
      className={classNames(classes.option, { [classes.selected]: selected })}
    >
      <FontAwesomeIcon
        icon={faCheck}
        className={classNames(classes.check, { [classes.visible]: selected })}
      />
      <PokemonTypeDot color={option.color} />
      <Typography as="span" type="body-sm">
        {option.label}
      </Typography>
    </span>
  );
};

export default PokemonTypeOption;
