import { Request, Response } from "express";
import { GetAllPackageUseCase } from "../../application/GetAllPackageUseCase";

export class GetAllPackageController{
    constructor(readonly getAllPackageUseCase: GetAllPackageUseCase){}
    async run(req: Request, res: Response){
        try{
            const packages = await this.getAllPackageUseCase.run();
            console.log(packages);
            if(packages){
                res.status(200).send({
                    status: "success",
                    data: packages.map((pkg: any) => {
                      return {
                        id: pkg.id,
                        name: pkg.name,
                        status: pkg.status,
                        create_at: pkg.create_at,
                        update_at: pkg.update_at
                      };
                    }),
                  });
            }else{
                res.status(400).send({
                    status: "error",
                    msn: "Ocurrio algún problema",
                  });
            }
        }catch(error){
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
              });
        }
    }
}