import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medicine } from 'src/app/Model/Medicine';
import { MedicineService } from 'src/app/Services/Medicine/medicine.service';
import { ProcureService } from 'src/app/Services/Procure/procure.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  medicine!:any;
  displayedColumns: string[] = ['id', 'name', 'desc', 'dosage','price','manufactureDate','expiryDate','currentStock','Action'];
  dataSource :any;
  formHeader ="Add Medicine";
  medicineId!:number;
  // id!:number;
    medicineName!:string;
    description!:string;
    dosage!:string;
    price!:number;
    manufactureDate!:Date;
    expiryDate!:Date;
    currentStock!:number;
  showForm= false;

  Medicine1:Medicine= new Medicine(0,"","","",0,new Date("Fri Dec 08 2019 "),new Date("Fri Dec 08 2019 "),0);

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;


  constructor(private medicineService : MedicineService, private procureSer : ProcureService){}

  ngOnInit(){
      this.getData();

      // return this.medicine;
  }
  getData(){
    this.procureSer.getMedicine().subscribe(data =>{
      this.medicine = data;

      this.dataSource=new MatTableDataSource<Medicine>(this.medicine);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;

    });
  }
  deleteMedicineData(medicineid:  number){
    this.procureSer.deleteMedicine(medicineid).subscribe(
      (resp : any) => {
        this.ngOnInit();
      },
      (err : any) => {
        console.log(err);
      }
    );

   this.ngOnInit();
   this.ngOnInit();
  }
  // openaddForm(){
  //   this.showForm=true;
  //   this.clearForm();
  //   this.formHeader="Add Medicine";
  // }
  openForm(item:Medicine){
    this.showForm=true
    this.medicineId =item.medicineId;
      this.medicineName=item.medicineName;
      this.description=item.description,
      this.dosage=item.dosage,
      this.price=item.price,
      this.manufactureDate=item.manufactureDate,
      this.expiryDate=item.expiryDate,
      this.currentStock=item.currentStock,
      this.formHeader = "Edit Medicine"
  }

  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.medicineId=0;
    this.medicineName="";
      this.description="",
      this.dosage="",
      this.price=0,
      this.manufactureDate=new Date(0),
      this.expiryDate=new Date(0),
      this.currentStock=0
  }
  saveMedicine(){
    this.showForm =false;
    let  body = {
      medicineId:this.medicineId,
      medicineName:this.medicineName,
      description:this.description,
      price:this.price,
      dosage:this.dosage,
      manufactureDate:this.manufactureDate,
      expiryDate:this.expiryDate,
      currentStock:this.currentStock
    }
    if(this.medicineId){
      body['medicineId'] =this.medicineId;
      this.medicineService.putMedicine(body).subscribe(
        ()=>{
          this.medicine()
        },
      )
    }else{
      this.medicineService.postMedicine(body).subscribe(
        ()=>{
          this.medicine()
        },
      )
    }
    this.ngOnInit();
    this.ngOnInit();
    this.ngOnInit();
   this.ngOnInit();

  }

}
