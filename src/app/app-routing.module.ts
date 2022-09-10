import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsRoutes } from './routes-const/routes-const.service';

const routes: Routes = [
  {
    path: `${ApplicationsRoutes.Home}`,
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: `${ApplicationsRoutes.Home}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
