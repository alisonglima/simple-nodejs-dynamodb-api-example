import { Router } from "express";

import { pokemonRoutes } from "./pokemons.routes";

const routes = Router();

routes.use("/pokemon", pokemonRoutes);

export { routes };
