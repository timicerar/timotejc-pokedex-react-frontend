import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import type {
  EvolutionChainLink,
  EvolutionDetail,
} from '~/api/models/EvolutionChainDetail';
import type { Pokemon } from '~/api/models/Pokemon';
import { useEvolutionChain, usePokemonSpecies } from '~/api/pokemon/hooks';
import NotFound from '~/components/compositions/NotFound/NotFound';
import PokemonCard from '~/components/compositions/PokemonCard/PokemonCard';
import PokemonEvoChainSkeleton from '~/components/compositions/PokemonEvoChain/PokemonEvoChainSkeleton';
import { NotFoundTypes } from '~/constants/not-found';
import { Routes } from '~/constants/routes';
import { getIdFromResourceUrl } from '~/utils/apiResourceUtils';
import classes from './PokemonEvoChain.module.scss';

type PokemonEvoChainProps = {
  pokemon: Pokemon;
};

type EvoPathNode = {
  name: string;
  detail?: EvolutionDetail;
};

const buildEvolutionPaths = (
  link: EvolutionChainLink,
  detail?: EvolutionDetail,
): EvoPathNode[][] => {
  const node: EvoPathNode = { name: link.species.name, detail };

  if (!link.evolves_to?.length) {
    return [[node]];
  }

  return link.evolves_to.flatMap((child) =>
    buildEvolutionPaths(child, child.evolution_details?.[0]).map((path) => [
      node,
      ...path,
    ]),
  );
};

const PokemonEvoChain = ({ pokemon }: PokemonEvoChainProps) => {
  const navigate = useNavigate();

  const speciesId = getIdFromResourceUrl(pokemon.species.url);

  const { data: species, isLoading: isLoadingSpecies } = usePokemonSpecies({
    name: pokemon.species.name,
    id: speciesId ? Number(speciesId) : undefined,
  });

  const evolutionChainId = getIdFromResourceUrl(species?.evolution_chain?.url);

  const {
    data: evolutionChain,
    isLoading: isLoadingChain,
    isError,
  } = useEvolutionChain(
    { id: evolutionChainId ?? '' },
    { enabled: Boolean(evolutionChainId) },
  );

  if (isLoadingSpecies || isLoadingChain) {
    return <PokemonEvoChainSkeleton />;
  }

  if (isError || !evolutionChain) {
    return <NotFound type={NotFoundTypes.POKEMON_EVOLUTION_CHAIN} />;
  }

  const paths = buildEvolutionPaths(evolutionChain.chain);

  return (
    <div className={classes.container}>
      {paths.map((path) => (
        <div
          key={path.map((node) => node.name).join('-')}
          className={classes.row}
        >
          {path.map((node, index) => (
            <div key={node.name} className={classes.step}>
              {index > 0 && (
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={classes.arrow}
                  aria-hidden="true"
                />
              )}
              <div className={classes.node}>
                <PokemonCard
                  name={node.name}
                  active={node.name === pokemon.species.name}
                  hideBadges
                  onClick={
                    node.name === pokemon.species.name
                      ? undefined
                      : () =>
                          navigate(
                            Routes.POKEMON_DETAILS({ pokemonName: node?.name }),
                          )
                  }
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PokemonEvoChain;
