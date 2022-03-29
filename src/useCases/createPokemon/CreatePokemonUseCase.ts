import { inject, injectable } from "tsyringe";

import { Pokemon } from "entities/Pokemon";

import { IPokemonsRepository } from "../../repositories/IPokemonsRepository";
import { ICreatePokemonDTO } from "../../dtos/ICreatePokemonDTO";

import { AppError } from "../../errors/AppError";

@injectable()
class CreatePokemonUseCase {
  constructor(
    @inject("PokemonsRepository")
    private pokemonsRepository: IPokemonsRepository
  ) {}

  async execute(data: ICreatePokemonDTO): Promise<Pokemon> {
    const { name, type } = data;

    const pokemon = await this.pokemonsRepository.create({
      name,
      type,
    });

    return pokemon;
  }
}

export { CreatePokemonUseCase };
