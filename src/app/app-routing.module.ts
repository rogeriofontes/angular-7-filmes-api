import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { FilmesComponent } from './components/filmes/filmes/filmes.component';
import { FilmesAddComponent } from './components/filmes/filmes-add/filmes-add.component';
import { FilmesDetailsComponent } from './components/filmes/filmes-details/filmes-details.component';
import { FilmesEditComponent } from './components/filmes/filmes-edit/filmes-edit.component';
import { CategoriasEditComponent } from './components/categorias/categorias-edit/categorias-edit.component';
import { CategoriasDetailsComponent } from './components/categorias/categorias-details/categorias-details.component';
import { CategoriasAddComponent } from './components/categorias/categorias-add/categorias-add.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';

const routes: Routes = [
  //Filmes
  {
    path: 'filmes',
    component: FilmesComponent,
    data: { title: 'Lista de Filmes'},
    canActivate: [AuthGuardService]
  },
  {
   path:'filmes-add',
   component: FilmesAddComponent,
   data: { title: 'Adicao de Filmes'},
   canActivate: [AuthGuardService]
  },
  {
    path: 'filmes-details/:id',
    component: FilmesDetailsComponent,
    data: { title: 'Detalhes de Filmes'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'filmes-edit/:id',
    component: FilmesEditComponent,
    data: { title: 'Alteração de Filmes'},
    canActivate: [AuthGuardService]
  },
  //categorias
  {
    path: 'categorias',
    component: CategoriasComponent,
    data: { title: 'Lista de Categorias'},
    canActivate: [AuthGuardService]
  },
  {
   path:'categorias-add',
   component: CategoriasAddComponent,
   data: { title: 'Adicao de Categorias'},
   canActivate: [AuthGuardService]
  },
  {
    path: 'categorias-details/:id',
    component: CategoriasDetailsComponent,
    data: { title: 'Detalhes de Categorias'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'categorias-edit/:id',
    component: CategoriasEditComponent,
    data: { title: 'Alteração de Categorias'}
  },
  //Login
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
