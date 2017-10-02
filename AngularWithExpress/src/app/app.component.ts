import { Component, ElementRef, OnInit } from '@angular/core';
import { ServicesUserService } from './services/services-user.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

declare var jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  users : any;
  userEdit: any;
  registerForm: FormGroup;
  
  formValues: any;
  constructor(private fb: FormBuilder, private _elRef: ElementRef, public _servicesUserService: ServicesUserService ){
     
    this.userEdit ={
      nombre : '',
      edad: '',
      genero: ''
    }
    this.getUsers()
  }
  ngOnInit(){
    jQuery(this._elRef.nativeElement).find('.modal').modal();
    this.registerForm = this.fb.group({
      user: this.fb.group({
        nombre: [],
        edad: ['', Validators.required],
        genero: ['', Validators.required],
    }),
    });
  }
  submitForm(){
    console.log('click submit');
    this.formValues = this.registerForm.value.user;
  }
  getUserForRole(nivel){
    this._servicesUserService.getUserForRole(nivel).subscribe(
          res => this.users = res
      )
  }
  getUsers(){
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
         this.getUsers();
      }
    )
  }
  agregarUser(){
   
     this.formValues = this.registerForm.value.user;
    this._servicesUserService.addUser(this.formValues).subscribe(
      res => {
         this.getUsers();  
         

      }
    ) 
  }
  eliminarUser(){
    console.log(this.userEdit)
    this._servicesUserService.deleteUser(this.userEdit._id).subscribe(
      res => {
          this.getUsers();
      }
    ) 
  }
}