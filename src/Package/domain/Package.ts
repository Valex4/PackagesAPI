export class Package {
    constructor(
      readonly id: number,
      readonly name: string,
      readonly status: string,
      readonly create_at: Date,
      readonly update_at: Date
    ) {}
  }