import { inject, injectable } from "tsyringe";

import { IPokemonsRepository } from "../../repositories/IPokemonsRepository";

import { AppError } from "../../errors/AppError";

@injectable()
class DeletePokemonUseCase {
  constructor(
    @inject("PokemonsRepository")
    private pokemonsRepository: IPokemonsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const pokemonExists = await this.pokemonsRepository.findById(id);

    if (!pokemonExists) {
      throw new AppError("Pokemon doesn't exists");
    }

    await this.pokemonsRepository.delete(id);
  }
}

export { DeletePokemonUseCase };
