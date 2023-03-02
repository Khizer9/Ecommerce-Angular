import { Component } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMsg : string | undefined
constructor(private product: ProductService){}

  submit(data: Product){
    this.product.addProduct(data).subscribe((result: any) => {
      console.log(result);
      if(result){
        this.addProductMsg = 'Product added successfully'
      }
      setTimeout(() => (this.addProductMsg = undefined), 3000)
    })
  }
}
 