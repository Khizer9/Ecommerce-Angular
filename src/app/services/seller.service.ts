import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data: SignUp){
   this.http.post('http://localhost:3000/seller', data, {observe: 'response'}).subscribe((result)=>{
    this.isSellerLoggedIn.next(true);
    localStorage.setItem('seller', JSON.stringify(result.body))
    this.router.navigate(['/seller-home'])
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['/seller-home'])
  }}
}
