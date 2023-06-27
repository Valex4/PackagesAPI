import { Request, Response } from "express";
import { GetByIdPackageUseCase } from "../../application/GetByIdPackageUseCase";

export class GetByIdPackageController{
    constructor(readonly getByIdPackageUseCase: GetByIdPackageUseCase){}

    async run(req: Request, res: Response){
        const id: number = parseInt(req.params.id);
        try{
            const pkg = await this.getByIdPackageUseCase.run(id);
            if(pkg)
            res.status(200).send({
                status: 'success',
                data: {
                    id: pkg.id,
                    name: pkg.name,
                    status: pkg.name,
                    create_at: pkg.create_at,
                    update_at: pkg.update_at
                },
            });
            else
            res.status(400).send({
                status: "error",
                msn: "Ocurrio algún problema",
              });
        }catch(error){
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
              });
        }
    }
}