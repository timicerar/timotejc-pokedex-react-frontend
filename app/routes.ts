import {
  index,
  layout,
  type RouteConfig,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/default-layout.tsx', [
    index('routes/pokedex.tsx'),
    route('/details/:pokemon', 'routes/pokemon-details.tsx'),
  ]),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
