import { randomUUID as uuid } from "crypto";

import { ICreatePokemonDTO } from "dtos/ICreatePokemonDTO";
import { IUpdatePokemonDTO } from "dtos/IUpdatePokemonDTO";
import { Pokemon } from "entities/Pokemon";
import PokemonModel from "models/PokemonModel";
import { IPokemonsRepository } from "./IPokemonsRepository";

class PokemonsRepository implements IPokemonsRepository {
  async create(data: ICreatePokemonDTO): Promise<Pokemon> {
    const { name, type } = data;

    const dynamoResponse = await PokemonModel.create({ id: uuid(), name, type });

    const pokemon = new Pokemon(
      dynamoResponse.id,
      dynamoResponse.name,
      dynamoResponse.type,
      dynamoResponse.createdAt,
      dynamoResponse.updatedAt
    );

    return pokemon;
  }

  async update(data: IUpdatePokemonDTO): Promise<Pokemon> {
    const dynamoResponse = await PokemonModel.update(data.id, {
      name: data.name,
      type: data.type,
    });

    const updatedPokemon = new Pokemon(
      dynamoResponse.id,
      dynamoResponse.name,
      dynamoResponse.type,
      dynamoResponse.createdAt,
      dynamoResponse.updatedAt
    );

    return updatedPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    const dynamoResponse = await PokemonModel.scan().exec();

    const pokemons = dynamoResponse.map(
      (pokemon) =>
        new Pokemon(pokemon.id, pokemon.name, pokemon.type, pokemon.createdAt, pokemon.updatedAt)
    );

    return pokemons;
  }

  async findById(id: string): Promise<Pokemon> {
    const dynamoResponse = await PokemonModel.get(id);

    if (!dynamoResponse) {
      return null;
    }

    const pokemon = new Pokemon(
      dynamoResponse.id,
      dynamoResponse.name,
      dynamoResponse.type,
      dynamoResponse.createdAt,
      dynamoResponse.updatedAt
    );

    return pokemon;
  }

  async delete(id: string): Promise<void> {
    await PokemonModel.delete(id);
  }
}

export { PokemonsRepository };
