import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPokemonByIdUseCase } from "./ListPokemonByIdUseCase";

import { AppError } from "../../errors/AppError";

class ListPokemonByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const listPokemonByIdUseCase = container.resolve(ListPokemonByIdUseCase);

    try {
      const pokemon = await listPokemonByIdUseCase.execute(id);

      return res.status(201).json({ status: "success", data: pokemon });
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { ListPokemonByIdController };
