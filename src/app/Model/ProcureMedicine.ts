export class ProcureMedicine{
  id!:number;
  manufacturerName!:string;
  medicineName!:string;
  delivaryDate!:Date;
  quantity!:number;
  totalBill!:number;
  
   constructor( manufacturerName:string, medicineName:string,delivaryDate:Date,quantity:number){}
}
