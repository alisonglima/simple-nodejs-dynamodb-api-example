import { inject, injectable } from "tsyringe";

import { Pokemon } from "entities/Pokemon";
import { IPokemonsRepository } from "../../repositories/IPokemonsRepository";

import { IUpdatePokemonDTO } from "dtos/IUpdatePokemonDTO";

import { AppError } from "../../errors/AppError";

@injectable()
class UpdatePokemonUseCase {
  constructor(
    @inject("PokemonsRepository")
    private pokemonsRepository: IPokemonsRepository
  ) {}

  async execute(data: IUpdatePokemonDTO): Promise<Pokemon> {
    const { id, name, type } = data;

    const pokemonExists = await this.pokemonsRepository.findById(id);

    if (!pokemonExists) {
      throw new AppError("Pokemon doesn't exists");
    }

    const updatedPokemon = await this.pokemonsRepository.update({ id, name, type });

    return updatedPokemon;
  }
}

export { UpdatePokemonUseCase };
