import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction.model';
import { DataService } from '../shared/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private url = environment.apiBaseUrl + '/transactions';
  constructor(private dataService: DataService, private http: HttpClient) {}

  getTransactions() {
    return this.http
      .get(this.url)
      .pipe(map((response) => response as Transaction[])); //.subscribe((res) => console.log(res));

    return this.dataService
      .readData(this.url)
      .pipe(map((response) => response as Transaction[]));
  }

  addTransaction(newTransaction: Transaction) {
    return this.dataService
      .createData(this.url + '/add', newTransaction)
      .pipe(map((response) => response as Transaction));
  }

  updateTransaction(modifiedTransaction: Transaction) {
    return this.dataService
      .updateData(this.url, modifiedTransaction)
      .pipe(map((response) => response as Transaction));
  }

  deleteTransaction(id: number) {
    return this.dataService.deleteData(this.url + '/delete', id);
  }
}
