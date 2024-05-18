import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  productform:FormGroup
  flag:boolean=false;
  constructor(private ps:ProductService,private fb:FormBuilder,private bxj:ActivatedRoute){}
  
  





  ngOnInit(): void {
    this.productform=this.fb.group({
      id:[],
    productName:[],
    productPrice:[],
    productType:[]
   })
  this.activeroute()
      
  
  
  
  }
  
  activeroute()
  {
   console.log('active rout start') 
  let id:number=0
    this.bxj.paramMap.subscribe(map=>{
    id= parseInt(map.get('id'))
    })
    if(id!=0)
      {
        console.log("in active route")
        console.log(id)
        this.ps.getSingleProduct(id).subscribe((prod:Product)=>{
          console.log(prod)
          this.productform.patchValue(prod);
          this.flag=true;
        });
      }
    
  }
  saveProduct()
  {
    if(!this.flag)
      {
  alert("in save product")
  this.ps.saveProduct(this.productform.value).subscribe();
  }
  else{
    this.ps.updateProduct(this.productform.value).subscribe();
  }
}
}
