import { AuthService } from './../../auth.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TokenInterface } from './../../../interface/token-interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb : FormBuilder, private  auth : AuthService ,  private act : Router){}

  ngOnInit(): void {

    const token = localStorage.getItem("token_auth");
    if(token){
      this.act.navigate(["producto"]);
    }
  }
  form = this.fb.group({
    username : [""],
    password: [""]
  });

  enviar(){
    this.auth.getToken(this.form.value).subscribe(res => {
      //console.log(res)
      localStorage.setItem('token_auth',res.token);
      localStorage.setItem('id_user',res.id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login exitoso',
        showConfirmButton: false,
        timer: 2500,
        toast: true,
        customClass: {
          container: 'my-swal-container',
          title: 'my-swal-title',
          icon: 'my-swal-icon',
        },
        background: '#E6F4EA',
      });
      this.act.navigate(["producto"])

    },(err : any)=>{
      console.log(err);
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Las credenciales de acceso son incorrectas',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        customClass: {
          container: 'my-swal-container',
          title: 'my-swal-title',
          icon: 'my-swal-icon',
          popup: 'my-swal-popup',
         },
       })
    });

  }

}
