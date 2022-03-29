import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePokemonUseCase } from "./DeletePokemonUseCase";

import { AppError } from "../../errors/AppError";

class DeletePokemonController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletePokemonUseCase = container.resolve(DeletePokemonUseCase);

    try {
      await deletePokemonUseCase.execute(id);

      return res.status(204).send();
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { DeletePokemonController };
