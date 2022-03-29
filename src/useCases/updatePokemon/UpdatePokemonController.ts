import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePokemonUseCase } from "./UpdatePokemonUseCase";

import { AppError } from "../../errors/AppError";
import { Pokemon } from "entities/Pokemon";

class UpdatePokemonController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, type } = req.body;

    const updatePokemonUseCase = container.resolve(UpdatePokemonUseCase);

    try {
      await updatePokemonUseCase.execute({ id, name, type });

      return res.status(201).json({ status: "success", message: "Pokemon updated successfully" });
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { UpdatePokemonController };
