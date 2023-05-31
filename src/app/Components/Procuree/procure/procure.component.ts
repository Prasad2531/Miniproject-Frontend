import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/Model/Seller';
import { ProcureService } from 'src/app/Services/Procure/procure.service';
import { ProcureMedicine } from 'src/app/Model/ProcureMedicine';
import { Procure } from 'src/app/Model/Procure';
import { Medicine } from 'src/app/Model/Medicine';

@Component({
  selector: 'app-procure',
  templateUrl: './procure.component.html',
  styleUrls: ['./procure.component.css']
})
export class ProcureComponent implements OnInit {
  procureArr! : any;
  med:Procure = new Procure(1,"","","",1,new Date("2023-01-01"),new Date("2024-03-03"),0);
  medicineId!:number;
  medicineName!:string;
  description!:string;
  dosage!:string;
  price!:number;
  manufactureDate!:Date;
  expiryDate!:Date;
  currentStock!:number;

  constructor(private procureSer : ProcureService){}

  ngOnInit(): void {
    this.display();
  }

  display(){
    this.procureArr=this.procureSer.getMedicine().subscribe((data) => this.procureArr = data);
      return this.procureArr;
  }

  deleteMedicine(medicineId : number){
    this.procureSer.deleteMedicine(medicineId).subscribe(
      (resp : any) => {
        this.display();
      },
      (err : any) => {
        console.log(err);
      }
    );
    location.reload();
  }

  public addMedicine = async () => {
    let resp = await this.procureSer.postMedicine(this.med);
    resp.subscribe((data) => (this.procureArr = data));
    // location.reload();


}

  searchMedicine(medicineName : String){
    this.procureSer.getMedicineName(medicineName).subscribe(
      (resp : any) => {
        this.display();
      },
      (err : any) => {
        console.log(err);
      }
    );
    location.reload();
  }

}
