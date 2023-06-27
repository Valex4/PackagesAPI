import { CreatePackageUseCase } from "../application/CreatePackageUseCase";
import { GetAllPackageUseCase } from "../application/GetAllPackageUseCase";
import { GetByIdPackageUseCase } from "../application/GetByIdPackageUseCase";
import { UpdatePackageUseCase } from "../application/UpdatePackageUseCase";
import { CreatePackageController } from "./controllers/CreatePackageController";
import { GetAllPackageController } from "./controllers/GetAllPackageController";
import { GetByIdPackageController } from "./controllers/GetByIdPackageController";
import { UpdatePackageController } from "./controllers/UpdatePackageController";
import { MysqlPackageRepository } from "./MysqlPackageRepository";


export const mysqlPackageRepository = new MysqlPackageRepository();

export const createPackageUseCase =  new CreatePackageUseCase(
    mysqlPackageRepository
);
export const getAllPUseCase = new GetAllPackageUseCase(mysqlPackageRepository);
export const getByIdPackageUseCase = new GetByIdPackageUseCase(mysqlPackageRepository);
export const createPackageController = new CreatePackageController(createPackageUseCase);
export const getAllPackageController = new GetAllPackageController(getAllPUseCase);
export const getByIdPackageController = new GetByIdPackageController(getByIdPackageUseCase);

export const updatePackageUseCase = new UpdatePackageUseCase(mysqlPackageRepository);
export const updatePackageController =  new UpdatePackageController(updatePackageUseCase);