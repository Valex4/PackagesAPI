import { Package } from "../domain/Package";
import { PackageRepository } from "../domain/PackageRepository";

export class GetAllPackageUseCase{
    constructor(readonly packageRepository: PackageRepository){}
    async run():Promise<Package[] | null>{
        try{
            const result = await this.packageRepository.getAll();
            console.log("Imprimiendo los paquetes: ")
            console.log(result);
            return result;
        }catch(error){
            return null;
        }
    }
}