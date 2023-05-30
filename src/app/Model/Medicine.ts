export class Medicine{
    medicineId!:number;
    medicineName!:string;
    description!:string;
    dosage!:string;
    price!:number;
    manufactureDate!:Date;
    expiryDate!:Date;
    currentStock!:number;
    // customerId!:number;

     constructor(medicineId:number, medicineName:string, description:string, dosage:string, price:number, manufactureDate:Date, expiryDate:Date, currentStock:number) {}
 }
