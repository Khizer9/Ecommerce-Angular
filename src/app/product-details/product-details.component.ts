import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productData: undefined | Product
  productQty : number = 1
constructor(private activeRoute: ActivatedRoute, private product: ProductService){}

ngOnInit() {
  let productId = this.activeRoute.snapshot.paramMap.get('productId');
  console.log(productId);
  productId && this.product.getProduct(productId).subscribe((result: any) => {
   this.productData = result;
  })
}

handleQty(val: string){
  if(this.productQty < 20 && val === 'plus'){
    this.productQty += 1
  }else if(this.productQty > 1 && val === 'min'){
    this.productQty -=1 
  }
}
}
