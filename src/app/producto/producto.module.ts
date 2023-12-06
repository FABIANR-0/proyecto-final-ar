import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListaComponent } from './components/lista/lista.component';
import { CrearComponent } from './components/crear/crear.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerComponent } from './components/ver/ver.component';

@NgModule({
  declarations: [
    ProductoComponent,
    ListaComponent,
    CrearComponent,
    ActualizarComponent,
    VerComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ProductoRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ]
})
export class ProductoModule { }
