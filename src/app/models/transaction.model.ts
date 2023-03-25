export class Transaction {
  constructor(
    public transactionId: number,
    public item: string,
    public amount: number,
    public category: string,
    public comment: string,
    public createddate: Date
  ) {}
}
