import { Package } from "../domain/Package";
import { PackageRepository } from "../domain/PackageRepository";

export class CreatePackageUseCase{
    constructor(readonly packageRepository: PackageRepository){}
    async run(name: string, status: string ): Promise<Package | null>{
        try{
            const packageCreated = await this.packageRepository.createPackage(name,status);
            return packageCreated;
        }catch(error){
            return null;
        }
    }
}