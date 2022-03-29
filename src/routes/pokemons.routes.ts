import { Router } from "express";

import { AppError } from "errors/AppError";

import { CreatePokemonController } from "useCases/createPokemon/CreatePokemonController";
import { DeletePokemonController } from "useCases/deletePokemon/DeletePokemonController";
import { ListAllPokemonsController } from "useCases/listAllPokemons/ListAllPokemonsController";
import { ListPokemonByIdController } from "useCases/listPokemonById/ListPokemonByIdController";
import { UpdatePokemonController } from "useCases/updatePokemon/UpdatePokemonController";

const pokemonRoutes = Router();

pokemonRoutes.post("/", new CreatePokemonController().handle);

pokemonRoutes.get("/", new ListAllPokemonsController().handle);

pokemonRoutes.get("/:id", new ListPokemonByIdController().handle);

pokemonRoutes.delete("/:id", new DeletePokemonController().handle);

pokemonRoutes.put("/:id", new UpdatePokemonController().handle);

export { pokemonRoutes };
