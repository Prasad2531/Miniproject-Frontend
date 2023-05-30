import { Component } from '@angular/core';
import { Disease } from 'src/app/Model/Disease';
import { DiseaseService } from 'src/app/Services/Disease/disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent {
diseases!:any;
disease:Disease=new Disease(0,"","","");
constructor(private diseaseService:DiseaseService){}
ngOnInit() {

  this.display();
  this.display();

}
display(){
  this.diseases = this.diseaseService.getDisease().subscribe((data) => (this.diseases = data));

  return this.diseases;
}
addDisease(){
  let resp = this.diseaseService.postDisease(this.disease);
  resp.subscribe((data) => (this.diseases = data));
  console.log(this.diseases);
  this.display();
  this.display();

}

deleteDisease(disease:Disease){
  this.diseaseService.deleteData(disease.id).subscribe((data)=>{
console.log("done");
  })

  this.display();
  this.display();
}
}
