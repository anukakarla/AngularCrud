import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GetAllComponent } from './get-all/get-all.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [
  {path:"",redirectTo:"getAll",pathMatch:"full"},
  {path:"add",component:AddComponent},
  {path:"getAll",component:GetAllComponent},
  {path:"add",component:AddComponent},
  {path:"update/:id",component:UpdateDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
