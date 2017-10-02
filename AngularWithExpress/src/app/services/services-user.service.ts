import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesUserService {
  url = 'http://localhost:5000/users/'
  constructor(public _http: Http) { }


  getUsers(){
    return this._http.get(this.url).map(res => res.json()); 
  }
  getUserById(id){
    return this._http.get(this.url+id).map(res => res.json()); 
  }

  updateUser(user : any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
    return this._http.put('http://localhost:5000/users/' + user._id, body, options )
    .map(
      (res: Response) => {
        res.json()
       
      });
  }

  addUser(user){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
    return this._http.post('http://localhost:5000/users/', body, options )
    .map(
      (res: Response) =>{ 
        res.json()
      }
      );

  }

  deleteUser(idUser){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // let body = JSON.stringify(user);
    return this._http.delete('http://localhost:5000/users/'+idUser, options )
    .map( 
      (res: Response) =>  {
        res.json()
    }
    );
  }
  getUserForRole(nivel){
     return this._http.get(this.url+"role/"+ nivel ).map(res => res.json()); 
  }
}
