import { index, type RouteConfig, route } from '@react-router/dev/routes';

export default [
  index('routes/pokedex.tsx'),
  route('/details/:pokemon', 'routes/pokemon-details.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
