import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'addproduct', component:AddComponent},
  {path:'viewallproductservice',component:ViewComponent},
  {path:'edit/:id',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RegisterdeviceRoutingModule { }
