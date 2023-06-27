import { Request, Response } from "express";

import { CreatePackageUseCase } from "../../application/CreatePackageUseCase";
export class CreatePackageController{
    constructor(readonly createPackageUseCase: CreatePackageUseCase){}

    async run(req: Request, res: Response){
        const data = req.body;
        try{
            const pkg = await this.createPackageUseCase.run(
                data.name, 
                data.status
            );
            if(pkg)
            res.status(201).send({
                status: "Success",
                data: {
                    id: pkg?.id,
                    name: pkg?.name,
                    status: pkg?.status,
                    create_at: pkg?.create_at,
                    update_at: pkg?.update_at,
                },
            });
            else
            res.status(404).send({
                status: "error",
                data: "NO fue posible agregar el registro",
            });
        }catch(error){
            res.status(404).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
            });
        }
    }

}