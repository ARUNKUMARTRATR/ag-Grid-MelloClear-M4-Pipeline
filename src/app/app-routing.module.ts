import { ManagerComponent } from './manager/manager.component';
import { UnderwriterComponent } from './underwriter/underwriter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'underwriter',
    component: UnderwriterComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path: '**',
    redirectTo: 'underwriter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
