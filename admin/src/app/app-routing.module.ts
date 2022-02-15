import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
    {
        path: 'app',
        component: CommonLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                pathMatch: 'full',
            },
        ],
    },
], {
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
