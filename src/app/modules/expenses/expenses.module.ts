import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionsComponent } from './transactions/transactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const expensesRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'transactions', component: TransactionsComponent },
      { path: '', redirectTo: 'transactions', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, TransactionsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(expensesRoutes)],
})
export class ExpensesModule {
  constructor() {}
}
