import { useSearchParams } from 'react-router';

export const usePokemonImageMode = () => {
  const [searchParams] = useSearchParams();
  const lowerResImg = searchParams.get('lowerResImg') === 'true';

  return { lowerResImg };
};
