import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType : string = 'default';
  sellerName: string = ''
  searchResults: undefined | Product[]
  constructor(public router:Router, private product: ProductService){
  }

  ngOnInit() {
    
    this.router.events.subscribe((val: any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          // console.log("inside seller")
          this.menuType = "Seller"
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller')
            let sellerData = sellerStore && JSON.parse(sellerStore)[0]
            this.sellerName = sellerData.name
          }
        }else{
          console.log("outside seller")
          this.menuType = "default"
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller')
    this.router.navigate(['/']) 
  }

  searchProduct(query: KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement
     this.product.searchProducts(element.value).subscribe((data: any) => {
      this.searchResults = data
     })
    }
  }

  hideSearch(){
    this.searchResults = undefined
  }

  submitSearch(val: string){
    this.router.navigate([`/search/${val}`])
  }
}
