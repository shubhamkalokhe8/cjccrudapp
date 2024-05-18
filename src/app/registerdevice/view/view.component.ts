import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  products:Product[];
  constructor(private productinfo:ProductService, private mnc:Router){}
  ngOnInit(): void {
    this.productinfo.getProducts().subscribe((productinfor:Product[])=>{
      this.products=productinfor
    })
  }
  deleteProduct(productindividual:Product)
  {
    this.productinfo.deleteProduct(productindividual).subscribe();
  }
  updateProduct(prodid:number)
  {
   this.mnc.navigateByUrl(`/addproduct/edit/${prodid}`)
   console.log('in update method viewComponent')
  }
}
