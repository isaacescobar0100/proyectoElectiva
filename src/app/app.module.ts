import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Seccion1Component } from './componentes/seccion1/seccion1.component';
import { Seccion2Component } from './componentes/seccion2/seccion2.component';
import { Seccion3Component } from './componentes/seccion3/seccion3.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { Pagina3Component } from './paginas/pagina3/pagina3.component';
import { Seccion4Component } from './componentes/seccion4/seccion4.component';
import { Seccion5Component } from './componentes/seccion5/seccion5.component';
import { Pagina4Component } from './paginas/pagina4/pagina4.component';
import { Pagina5Component } from './paginas/pagina5/pagina5.component';
import { ListEmpleadosComponent } from './componentes/list-empleados/list-empleados.component';
import { CreateEmpleadosComponent } from './componentes/create-empleados/create-empleados.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Seccion4Component,
    Seccion5Component,
    Pagina4Component,
    Pagina5Component,
    ListEmpleadosComponent,
    CreateEmpleadosComponent,


 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
