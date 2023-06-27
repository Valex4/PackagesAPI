import { query } from "../../database/mysql";
import { Package } from "../domain/Package";
import { PackageRepository } from "../domain/PackageRepository";

export class MysqlPackageRepository implements PackageRepository{
   async getById(packageID: number): Promise<Package | null> {
        const sql = "SELECT * FROM Package where id=?";
        const params: any[] = [packageID];
        try{
            const [result]: any =  await query(sql, params);
            return new Package(
                result[0].id,
                result[0].name,
                result[0].status,
                result[0].create_at,
                result[0].update_at
            );
        }catch(error){
            return null;
        }
    }
   async createPackage(name: string, status: string): Promise<Package | null> {
        const sql = "INSERT INTO Package (name, status) VALUES (?,?)"
        const params: any[] = [name, status];
        try{
            const [result]: any = await query(sql, params);
            console.log("Imprimiendo el result en la insercion: ")
            console.log(result);
            return new Package(result.insertId, name, status, result.create_at, result.update_at);
        }catch(error){
            return null;
        }
    }
    async updatePackage(packageID: number, status: string): Promise<Package | null> {
        const sql = "UPDATE Package set status = ? where id = ?";
        const params: any[] = [status, packageID];
        try{
            const [result]: any = await query(sql,params);
            console.log(result);
            return new Package(packageID, result.name, status, result.create_at, result.update_at);
        }
        catch(error){
            return null;
        }
    }
    async getAll(): Promise<Package[] | null> {
        const sql = "SELECT * FROM Package";
        try {
          const [data]: any = await query(sql, []);
          const dataPackages = Object.values(JSON.parse(JSON.stringify(data)));
          return dataPackages.map(
            (pkg: any) => new Package(
                pkg.id,
                pkg.name,
                pkg.status,
                pkg.create_at,
                pkg.update_at
            )
          );
        } catch (error) {
          return null;
        }
      }
}