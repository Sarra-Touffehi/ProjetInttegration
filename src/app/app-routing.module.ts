import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './components/error/error.component';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { ListPartenairesComponent } from './components/list-partenaires/list-partenaires.component';

const routes: Routes = [
  {path:'sign-in', title:'Sign-in',component:SignInComponent},
  {path:'sign-up', title:'Sign-up',component:SignUpComponent},
  {path:'list-services',title:'list-services',component:ListServicesComponent},
  {path:'list-partenaires',title:'list-partenaires',component:ListPartenairesComponent},
 {path:'menu',title:'Menu',component:MenuComponent},
 {path:'', redirectTo:'menu', pathMatch:'full'},
 {path:'**', title:'Erreur', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
