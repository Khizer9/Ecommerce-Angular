import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | Product
  productMsg: undefined | string
constructor(private route: ActivatedRoute, private product: ProductService){}

ngOnInit() {
  let productId = this.route.snapshot.paramMap.get('id')
  console.log(productId)
  productId && this.product.getProduct(productId).subscribe((data) => {
    console.log(data)
    this.productData = data
  })
}
  submit(data: Product){
    console.log(data)
    if(this.productData){
      data.id = this.productData.id
    }
    this.product.updateProduct(data).subscribe((result) => {
      if(result){
        this.productMsg = 'product has updated'
      }
    })
    setTimeout(()=>{
      this.productMsg = undefined
    }, 3000)
  }
}
