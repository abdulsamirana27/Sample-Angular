import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout-component/layout-component.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {

    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
