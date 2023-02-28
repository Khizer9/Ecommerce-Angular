import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
constructor(private seller: SellerService, private router:Router){}


ngOnInit() {
  this.seller.reloadSeller()
}


  signUp(data: SignUp){
    this.seller.userSignUp(data)
  }
}
