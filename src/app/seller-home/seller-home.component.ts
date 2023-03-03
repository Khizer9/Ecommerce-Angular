import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons' 

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productList : undefined | Product[]
  productMsg : undefined | string
  icon = faTrash;
  editIcon = faEdit;
constructor(private product: ProductService){}

ngOnInit(){
  this.list()
}

deleteProduct(id: number){
  this.product.deleteProduct(id).subscribe((result)=>{
    if(result){
      this.productMsg = 'Successfully deleted'
      this.list()
    }
  })
  setTimeout(()=>{
    this.productMsg = undefined
  }, 3000)
}

list(){
  this.product.productList().subscribe((result)=>{
    console.log(result);
    this.productList = result;
  })
}
}
