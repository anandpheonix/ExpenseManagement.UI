export class Transaction {
  constructor(
    public transactionId: number,
    public item: string,
    public amount: number,
    public categoryId: number,
    public comment: string
  ) {}
}
