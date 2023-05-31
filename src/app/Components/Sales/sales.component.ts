import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Sales } from 'src/app/Model/Sales';



import { SalesService } from 'src/app/Services/Sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{
  formHeader ="Edit Customer details";
  bCus: boolean = true;
  bMed: boolean = false;
  sales!: any;
  totalPrice!:number;

Sale:Sales= new Sales(0,"",0,0,new Date("2023-09-08"));

constructor(public saleService:SalesService) { }
saleId!:number;
medicineName!:string;
medicineQunatity!:number;
 price!:number;
 date!:Date;
bill!:number
showbill=false;
showForm= false;
 showBill=false;
 showFormMed=false;
  searchForm!: FormGroup;
 customers!: Sales[];

  ngOnInit() {
    this.searchForm = new FormGroup({
      date: new FormControl('')
    });
    this.display();
    this.display();
  }

  search(date:Date) {
   
    this.sales = this.saleService.getSaleByDate(date).subscribe((data) => this.sales = data);
    return this.sales;
  }

  display(){
    this.sales = this.saleService.getSale().subscribe((data) => this.sales = data);
     return this.sales;
  }






public addSale = async () => {
  let resp = await this.saleService.postSale(this.Sale);
  resp.subscribe((data) => (this.sales = data));

}

calculateBill(item:Sales){
  this.showbill=true;
this.bill=item.medicineQunatity*item.price;

}



  openBill(){
    this.showBill=true;
  }
  closeBill(){
    this.showBill=false;
  }
  openForm(item:Sales){
    this.showForm=true;
  this.saleId=item.saleId,
  this.medicineName=item.medicineName,
this.medicineQunatity=item.medicineQunatity,
this.price=item.price,
this.date=item.date,
     this.formHeader = "Edit Customer"
  }
  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.saleId=0;
    this.medicineName="";
    this.medicineQunatity=0;
    this.price=0;
   }
  saveSale(){
    this.showForm =false;
  
    let  body = {
     
  saleId: this.saleId,
  
medicineName:this.medicineName,
medicineQunatity:this.medicineQunatity,
price:this.price,
date:this.date

   }
   if(this.saleId){
    body['saleId'] =this.saleId;
    this.saleService.updateSale(body).subscribe(
      (res)=>{
        this.sales()
      },
    )
  }else
  this.saleService.postSale(body).subscribe(
        (res)=>{
          this.sales()
        },
      )
    
    this.ngOnInit();
    this.ngOnInit();
  }
 
  closeFormMed(){
    this.showFormMed=false;
  } 
 


  deleteData(item:Sales) {
    this.saleService.deleteSale(item.saleId).subscribe((resp) => {
      console.log(resp);
    });
    this.display();
    this.display();
  }


}
