import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType : string = 'default';
  sellerName: string = ''
  constructor(public router:Router){
  }

  ngOnInit() {
    
    this.router.events.subscribe((val: any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.log("inside seller")
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
}
