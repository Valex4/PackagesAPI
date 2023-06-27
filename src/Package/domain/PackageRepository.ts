import { Package } from "./Package";

export interface PackageRepository {
    getAll(): Promise<Package[] | null>;
  getById(packageID: number): Promise<Package | null>;
  createPackage(
    name: string,
    status: string
  ): Promise<Package | null>;
  updatePackage(packageID: number, status: string): Promise<Package | null>;
}