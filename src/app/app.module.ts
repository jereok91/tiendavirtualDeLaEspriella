import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { HomeComponent } from './components/home/home.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { WhatsappLogComponent } from './components/whatsapp-log/whatsapp-log.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { ProducBanerComponent } from './components/produc-baner/produc-baner.component';
import { CailidadBanerComponent } from './components/cailidad-baner/cailidad-baner.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    QuienessomosComponent,
    PiedepaginaComponent,
    ContactenosComponent,
    WhatsappLogComponent,
    CaruselComponent,
    ProducBanerComponent,
    CailidadBanerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
