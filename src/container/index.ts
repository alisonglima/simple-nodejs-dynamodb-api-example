import { container } from "tsyringe";

import { IPokemonsRepository } from "repositories/IPokemonsRepository";
import { PokemonsRepository } from "repositories/PokemonsRepository";

container.registerSingleton<IPokemonsRepository>("PokemonsRepository", PokemonsRepository);

export { container };
