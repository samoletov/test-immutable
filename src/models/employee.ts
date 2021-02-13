export interface IEmployee {
  name: string;
  commission: number;
}

export class Employee implements IEmployee {
  public name: string;
  public commission: number;
  public assignedJobsCount: number;
  constructor(data: IEmployee) {
    this.name = data.name;
    this.commission = data.commission;
    this.assignedJobsCount = 0;
  }
}
