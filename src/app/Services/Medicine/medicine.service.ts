import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from 'src/app/Model/Medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  public getMedicine(){
    return this.http.get("http://localhost:8999/medicine/getAllMedicine");
  }
  public getMedicineById(medId:number){
    return this.http.get("http://localhost:8999/medicine/getMedicineById/"+medId);
  }

  public postMedicine(body: any){
    return this.http.post("http://localhost:8999/medicine/insertMedicine",body,{responseType:'text'as 'json'});
  }
  public deleteMedicine(id:number){
    return this.http.delete("http://localhost:8999/medicine/deleteMedicine/"+id);
  }
  public putMedicine(body: any){
    return this.http.put("http://localhost:8999/medicine/updateMedicine",body)
  }
  public getMedicineByCustomerId(id:number){
    return this.http.get("http://localhost:8999/medicine/customer/"+id);
  }

  public getMedicineSorted(){
    return this.http.get("http://localhost:8999/getAllMedicineSorted");
  }
}
