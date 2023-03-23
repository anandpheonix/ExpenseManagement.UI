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

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (err) => {
        console.log('Error occured: ' + err);
      },
    });
  }
}
