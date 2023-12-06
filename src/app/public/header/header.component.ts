import { Component } from '@angular/core';
import { ProductoComponent } from 'src/app/producto/pages/producto/producto.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  

  //token = this.product.getToken

  logaut(){
    localStorage.clear();
  }
}
