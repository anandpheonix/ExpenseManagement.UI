import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
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
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(expensesRoutes),
    TableModule,
    ButtonModule,
  ],
})
export class ExpensesModule {
  constructor() {}
}
