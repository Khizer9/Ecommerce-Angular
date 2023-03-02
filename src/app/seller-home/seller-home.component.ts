import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productList : undefined | Product[]
constructor(private product: ProductService){}

ngOnInit(){
  this.product.productList().subscribe((result)=>{
    console.log(result);
    this.productList = result;
  })
}
}
