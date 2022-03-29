import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllPokemonsUseCase } from "./ListAllPokemonsUseCase";

import { AppError } from "../../errors/AppError";

class ListAllPokemonsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAllPokemonsUseCase = container.resolve(ListAllPokemonsUseCase);

    try {
      const pokemons = await listAllPokemonsUseCase.execute();

      return res.status(201).json({ status: "success", data: pokemons });
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { ListAllPokemonsController };
