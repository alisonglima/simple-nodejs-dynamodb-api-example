import "reflect-metadata";
require("dotenv").config();

import express, { json, Response } from "express";
import "express-async-errors";

import { errorHandler } from "middlewares/errorHandler";
import { routes } from "./routes";

import "./container";

function server() {
  const server = express();

  server.use(json());
  server.use(process.env.API_PREFIX || "/v1", routes);

  server.use(errorHandler);

  server.get("/health", (_, res: Response) => {
    return res.status(200).json({
      message: "Server is running :D",
    });
  });

  server.set("port", process.env.PORT || 3333);

  return server;
}

export default server();
