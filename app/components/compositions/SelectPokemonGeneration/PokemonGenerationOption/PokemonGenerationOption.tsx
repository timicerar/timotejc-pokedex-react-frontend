import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Typography from '~/components/components/Typography/Typography';
import type { PokemonGenerationOptionProps } from '~/components/compositions/SelectPokemonGeneration/PokemonGenerationOption/PokemonGenerationOption.interface';
import classes from './PokemonGenerationOption.module.scss';

const PokemonGenerationOption = ({
  option,
  selected,
}: PokemonGenerationOptionProps) => {
  return (
    <span
      className={classNames(classes.option, { [classes.selected]: selected })}
    >
      <FontAwesomeIcon
        icon={faCheck}
        className={classNames(classes.check, { [classes.visible]: selected })}
      />
      <Typography as="span" type="body-sm">
        {option.label}
      </Typography>
    </span>
  );
};

export default PokemonGenerationOption;
