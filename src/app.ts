import "@/setup";

import express from "express";
import "express-async-errors";
import cors from "cors";

import errorHandlingMiddleware from "@/middlewares/errorHandlingMiddleware";
import * as numberController from "@/controllers/numberController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/orderAll", numberController.getAllOrdered);

app.use(errorHandlingMiddleware);

export default app;
