import { inject, injectable } from "tsyringe";

import { Pokemon } from "entities/Pokemon";

import { IPokemonsRepository } from "../../repositories/IPokemonsRepository";

@injectable()
class ListAllPokemonsUseCase {
  constructor(
    @inject("PokemonsRepository")
    private pokemonsRepository: IPokemonsRepository
  ) {}

  async execute(): Promise<Pokemon[]> {
    const pokemons = await this.pokemonsRepository.findAll();

    return pokemons;
  }
}

export { ListAllPokemonsUseCase };
