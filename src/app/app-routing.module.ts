import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';

const routes: Routes = [
{
  path: "",
  component: HomeComponent,
  pathMatch: 'full',
  data:{

    title: "Inicio"
  }
} ,
{
  path: "quienes-somos",
  component: QuienessomosComponent,
  data: {
    title: "Quienes somos"
  }
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
