import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ProductoComponent } from '../../pages/producto/producto.component';
import { ActualizarComponent } from '../actualizar/actualizar.component';
import { ServiceService } from '../../service.service';
import { VerComponent } from '../ver/ver.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  constructor( private service : ServiceService, private product: ProductoComponent, private dialog: MatDialog){}

  @Input() productData: any = {};

  ngOnChanges(){
  }


  delete(id:any){
    Swal.fire({
      title: '¿Estás seguro de borrar este articulo?',
      text: '¡Esto no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo',
      denyButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteProducto(id).subscribe(
          (res :any)=>{
            this.product.ngOnInit();
            Swal.fire({
              position: 'top-end',
              icon: 'warning',
              title: 'producto eliminado',
              showConfirmButton: false,
              timer: 1500,
              toast: true,
              customClass: {
                container: 'my-swal-container',
                title: 'my-swal-title',
                icon: 'my-swal-icon',
              },
              background: '#FAD7A0',
              })
            }
        );

      }
    });
  }

  ver(id : any){
    const dialogRef = this.dialog.open(VerComponent, {
      width: '550px',
      height: '300px',
      data: { id: id },
    });
  }
  edit(id:any){
    const dialogRef = this.dialog.open(ActualizarComponent, {
      width: '600px',
      height: '500px',
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(res=>{
      this.product.ngOnInit()
    })

  }
}
