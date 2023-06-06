
export class Report {
  instanceId: string;
  updatedSet: string;
  author: string;
  updateDate: Date;
  createdComponent: String;
  comments?: string;
 /*
  public static clone(report: Report) {
    let u: Report = new Report(report.instanceName);
    u.name = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday;
    u.balance = user.balance;
    u.transactions = user.transactions;
    return u;
  }
  */
}