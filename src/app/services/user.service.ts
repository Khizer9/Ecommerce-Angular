import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  inValiduserAuth = new EventEmitter<boolean> (false);
  constructor(private http: HttpClient, private router: Router) { }

  userSignup(user: SignUp){
    this.http.post('http://localhost:3000/users', user, {observe: 'response'}).subscribe((res)=> {
      console.log(res)
      if(res){
        localStorage.setItem('user', JSON.stringify(res.body))
        this.router.navigate(['/'])
      }
    })
  }

  userAuthLoad(){
    if(localStorage.getItem('user')){ 
      this.router.navigate(['/'])
    }
  }

  userLogin(data:login){
    this.http.get<SignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body){
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['/']);
        this.inValiduserAuth.emit(false)
      }else{
        this.inValiduserAuth.emit(true)
      }
    })
  }
}
