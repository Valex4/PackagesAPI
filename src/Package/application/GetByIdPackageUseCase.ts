import { Package } from "../domain/Package";
import { PackageRepository } from "../domain/PackageRepository";

export class GetByIdPackageUseCase{
    constructor(readonly packageRepository: PackageRepository){};
    async run(id: number): Promise<Package | null> {
        try{
            const result = await this.packageRepository.getById(id);
            return result;
            console.log("Estamos devolviendo el by id");
        }catch(error){
            return null;
        }
    }
}