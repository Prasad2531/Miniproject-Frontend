import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewCustomerService {

  constructor(private http:HttpClient) { }

  public getCustomer(){
    return this.http.get("http://localhost:8999/customer/getAllCustomeres");
  }

 public postCustomer(body: any){
    return this.http.post("http://localhost:8999/customer/insertCustomer",body,{responseType:'text'as 'json'});
  }
  public deleteCustomer(id:number){
    return this.http.delete("http://localhost:8999/customer/deleteCustomer/"+id);
  }
  public putCustomer(body:any){
    return this.http.put("http://localhost:8999/customer/updateCustomer",body)
  }

}
