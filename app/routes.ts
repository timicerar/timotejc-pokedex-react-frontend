import {
  index,
  layout,
  type RouteConfig,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/default-layout.tsx', [
    index('routes/pokedex.tsx'),
    route('/pokemon/:pokemon', 'routes/pokemon-details.tsx'),
  ]),
  layout('routes/center-layout.tsx', [route('*', 'routes/not-found.tsx')]),
] satisfies RouteConfig;
