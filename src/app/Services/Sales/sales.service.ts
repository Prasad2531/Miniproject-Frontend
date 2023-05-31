import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sales } from 'src/app/Model/Sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }

  getSale(){
    return this.http.get("http://localhost:8999/sale/getAllSales");
  }
  getSaleByDate(date:Date){
    return this.http.get("http://localhost:8999/sale/getSaleByDate/"+date);
  }
  public postSale(user: Sales){
    return this.http.post("http://localhost:8999/sale/insertSale",user,{responseType:'text'as 'json'});
  }
  public deleteSale(id:number){
    return this.http.delete("http://localhost:8999/sale/deleteSale/"+id);
  }
  public updateSale(user:Sales){
    // alert("update");
    return this.http.put("http://localhost:8999/sale/updateSale",user);
  }

  
}
