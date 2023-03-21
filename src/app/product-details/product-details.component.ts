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
  removeCart = false
constructor(private activeRoute: ActivatedRoute, private product: ProductService){}

ngOnInit() {
  let productId = this.activeRoute.snapshot.paramMap.get('productId');
  console.log(productId);
  productId && this.product.getProduct(productId).subscribe((result: any) => {
   this.productData = result;

   let cartData = localStorage.getItem('localCart')
   if(cartData && productId){
    let items = JSON.parse(cartData)
    items = items.filter((item: Product)=> productId == item.id.toString())

    if(items.length > 0){
      this.removeCart = true
    }else{
      this.removeCart = false
    }
   }
  })
}

handleQty(val: string){
  if(this.productQty < 20 && val === 'plus'){
    this.productQty += 1
  }else if(this.productQty > 1 && val === 'min'){
    this.productQty -=1 
  }
}

addToCart(){
  if(this.productData){
    this.productData.quantity = this.productQty
    if(!localStorage.getItem('user')){
      this.product.localAddToCart(this.productData) 
      this.removeCart = true
    }
  }
}

removeToCart(productId: number){
  this.product.removeItemFromCart(productId)
  this.removeCart = false
}
}
