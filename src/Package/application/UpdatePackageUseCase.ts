import { Package } from "../domain/Package";
import { PackageRepository } from "../domain/PackageRepository";

export class UpdatePackageUseCase{
    constructor(readonly packageRepository: PackageRepository){}

    async run(packageID: number, status: string): Promise<Package | null>{
        try{
            const result = await this.packageRepository.updatePackage(packageID,status);
            return result;
        }catch(error){
            return null;
        }
    }
}