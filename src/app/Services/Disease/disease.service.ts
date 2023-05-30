import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disease } from 'src/app/Model/Disease';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(private http:HttpClient) { }

  getDisease(){
    return this.http.get("http://localhost:8010/getAllDisease");
  }
  public postDisease(disease: Disease){
    return this.http.post("http://localhost:8010/insertDisease",disease,{responseType:'text'as 'json'});
  }
  public deleteData(id:number){
   
    return this.http.delete("http://localhost:8010/deleteDisease/"+id);
  }
 
}
