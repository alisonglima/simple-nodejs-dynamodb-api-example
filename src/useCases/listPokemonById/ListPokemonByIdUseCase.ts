import { inject, injectable } from "tsyringe";

import { Pokemon } from "entities/Pokemon";
import { IPokemonsRepository } from "../../repositories/IPokemonsRepository";

import { AppError } from "errors/AppError";

@injectable()
class ListPokemonByIdUseCase {
  constructor(
    @inject("PokemonsRepository")
    private pokemonsRepository: IPokemonsRepository
  ) {}

  async execute(id: string): Promise<Pokemon> {
    const pokemonExists = await this.pokemonsRepository.findById(id);

    if (!pokemonExists) {
      throw new AppError("Pokemon doesn't exists");
    }

    const pokemon = await this.pokemonsRepository.findById(id);

    return pokemon;
  }
}

export { ListPokemonByIdUseCase };
