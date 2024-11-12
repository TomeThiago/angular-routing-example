import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  { path: '', redirectTo: '/users/list', pathMatch: 'full' }
];
