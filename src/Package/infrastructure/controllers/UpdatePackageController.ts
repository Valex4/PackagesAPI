import { Request, Response } from "express";
import { UpdatePackageUseCase } from "../../application/UpdatePackageUseCase";

export class UpdatePackageController{
    constructor(readonly updatePackageUseCase: UpdatePackageUseCase){}

    async run(req: Request, res: Response){
        const data =  req.body;
        try{
            const newPackage = await this.updatePackageUseCase.run(data.id,data.status);
            if(newPackage)
            res.status(201).send({
                status: "success",
                data: {
                  id: newPackage?.id,
                  name: newPackage?.name,
                  status: newPackage?.status,
                  create_at: newPackage?.create_at,
                  update_at: newPackage?.update_at
                },
              });
              else
              res.status(204).send({
                status: "error",
                data: "NO fue posible actualizar el registro",
              });
        }catch(error){
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error al actualizar el registro",
                msn: error,
              });
        }
    }
}