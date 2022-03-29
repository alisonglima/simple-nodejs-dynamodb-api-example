import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePokemonUseCase } from "./CreatePokemonUseCase";

import { AppError } from "../../errors/AppError";

class CreatePokemonController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, type } = req.body;

    const createPokemonUseCase = container.resolve(CreatePokemonUseCase);

    try {
      await createPokemonUseCase.execute({ name, type });

      return res.status(201).json({ status: "success", message: "Pokemon created successfully" });
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export { CreatePokemonController };
