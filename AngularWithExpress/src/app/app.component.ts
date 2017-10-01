import { Component } from '@angular/core';
import { ServicesUserService } from './services/services-user.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : any;
  userEdit: any;
  constructor( public _servicesUserService: ServicesUserService ){
    this.userEdit ={
      nombre : '',
      edad: '',
      genero: ''
    }
    this._servicesUserService.getUsers().subscribe(
      res => this.users = res
    )
  }
  optenerUser(user){
    this._servicesUserService.getUserById(user._id).subscribe(
      res => this.userEdit = res
    )
  }
  guardarUser(){
    this._servicesUserService.updateUser(this.userEdit).subscribe(
      res => {console.log( res)
          this._servicesUserService.getUsers().subscribe(
          res=> this.users =  res
        )
      }
    )
  }
  agregarUser(){
    console.log(this.userEdit)
    this._servicesUserService.addUser(this.userEdit).subscribe(
      res => {
        this._servicesUserService.getUsers().subscribe(
          res=> this.users =  res
        )
      }
    ) 
  }
  eliminarUser(){
    console.log(this.userEdit)
    this._servicesUserService.deleteUser(this.userEdit._id).subscribe(
      res => {
          this._servicesUserService.getUsers().subscribe(
          res=> this.users =  res
        )
      }
    ) 
  }
}