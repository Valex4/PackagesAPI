import express from "express";
import { createPackageController } from "./dependencies";
import { getAllPackageController } from "./dependencies";
import { getByIdPackageController } from "./dependencies";
import { updatePackageController } from "./dependencies";
export const packageRouter = express.Router();

packageRouter.get("/getAll", getAllPackageController.run.bind(getAllPackageController));
packageRouter.get("/getById/:id", getByIdPackageController.run.bind(getByIdPackageController));
packageRouter.post("/create", createPackageController.run.bind(createPackageController));
packageRouter.post("/update", updatePackageController.run.bind(updatePackageController));