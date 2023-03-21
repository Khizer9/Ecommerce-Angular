import { Component, OnInit } from '@angular/core';
import { login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit{
  showLogin: boolean = true; 
  authError: string = ''
constructor(private user: UserService){}

ngOnInit() {
  this.user.userAuthLoad()
}

signUp(data: SignUp){
  this.user.userSignup(data)
}

login(data: login){
  this.user.userLogin(data)
  this.user.inValiduserAuth.subscribe((res)=> {
    console.log(res, "res") 
    if(res){
      this.authError = "Enter Valid user details"
    }
  })
}

openLogin(){
this.showLogin = true;
}

openSignup(){
this.showLogin = false
}
}
