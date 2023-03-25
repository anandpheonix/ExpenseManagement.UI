import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TransactionsComponent } from './transactions/transactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkeletonModule } from 'primeng/skeleton';
import { MatTabsModule } from '@angular/material/tabs';

const expensesRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'transactions', component: TransactionsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
    SkeletonModule,
    MatTabsModule,
  ],
})
export class ExpensesModule {
  constructor() {}
}
