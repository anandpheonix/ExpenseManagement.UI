import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styles: [],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  first = 0;
  rows = 10;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getAllTransactions();
    console.log(this.transactions);
  }

  getAllTransactions() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        console.log(data);
        this.transactions = data;
      },
      error: (err) => {
        console.log('Error occured: ' + err);
      },
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.transactions
      ? this.first === this.transactions.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.transactions ? this.first === 0 : true;
  }
}
