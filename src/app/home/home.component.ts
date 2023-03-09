import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProducts : undefined | Product[]
  trendyProducts : undefined | Product[]
  constructor(private product: ProductService) {
  }

  ngOnInit() {
    this.product.popularProducts().subscribe((data)=> {
      this.popularProducts = data
      console.log(this.popularProducts, "pop");
    })

    this.product.trendyProducts().subscribe((data)=> {
      this.trendyProducts = data
    })
  }

}
