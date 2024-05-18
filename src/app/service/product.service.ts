import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
constructor(private http:HttpClient){}
  saveProduct(product:  Product)
  {
    return this.http.post(`http://localhost:8080/product/product`,product);
  }
  getProducts()
  {
   return this.http.get("http://localhost:8080/product/products")
  }
  deleteProduct(id:Product)
  {
return this.http.delete(`http://localhost:8080/product/deleteProduct/${id.id}`)
  }
  getSingleProduct(id:number)
  {
   return this.http.get(`http://localhost:8080/product/getProductById/${id}`)
    console.log("In single product method")
  }
  updateProduct(prod:Product)
  {
    return this.http.put(`http://localhost:8080/product/updateProduct/${prod.id}`,prod)
  }
}
