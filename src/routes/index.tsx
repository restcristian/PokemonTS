import PokemonsPage from "../pages/Pokemons";
import PokemonPage from "../pages/Pokemon";
import { paths } from "../helpers/constants";

type PagesTypes = typeof PokemonsPage | typeof PokemonPage;

interface Route {
  path: string;
  component: PagesTypes;
}

const routes: Array<Route> = [
  {
    path: paths.FETCH_POKEMON,
    component: PokemonPage
  },
  {
    path: paths.ROOT,
    component: PokemonsPage
  }
];

export default routes;
