import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full',
    
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Inicio"
    }
  },
  {
    path: "quienes-somos",
    component: QuienessomosComponent,
    data: {
      title: "Quienes somos"
    }
  },
  {
    path: "contactenos",
    component: ContactenosComponent,
    pathMatch: 'full',
    data: {
      title: "Contactenos"
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
