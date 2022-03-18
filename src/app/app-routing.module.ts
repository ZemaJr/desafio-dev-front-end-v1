import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SomaComponent } from './component/soma/soma.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
// import { AuthGuard } from './component/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'soma', component: SomaComponent },
  { path: 'usuarios', component: UsuariosComponent },
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  // {path: 'soma', component: SomaComponent, canActivate: [AuthGuard]},
  // {path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
