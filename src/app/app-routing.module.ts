import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './orgpol/create/create.component';
import { OrgpolComponent } from './orgpol/orgpol.component';

const routes: Routes = [
  {path: '', component:OrgpolComponent},
  {path: 'create', component:CreateComponent},
  {path: 'edit/:id',component:CreateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
