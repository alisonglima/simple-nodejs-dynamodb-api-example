import { ICreatePokemonDTO } from "../dtos/ICreatePokemonDTO";
import { IUpdatePokemonDTO } from "../dtos/IUpdatePokemonDTO";
import { Pokemon } from "../entities/Pokemon";

interface IPokemonsRepository {
  create(data: ICreatePokemonDTO): Promise<Pokemon>;
  update(data: IUpdatePokemonDTO): Promise<Pokemon>;
  findAll(): Promise<Pokemon[]>;
  findById(id: string): Promise<Pokemon>;
  delete(id: string): Promise<void>;
}

export { IPokemonsRepository };
