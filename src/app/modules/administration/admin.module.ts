import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';

const adminRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(adminRoutes)],
})
export class AdminModule {
  constructor() {}
}
