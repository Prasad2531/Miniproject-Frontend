export class Procure{
    medicineId!:number;
    medicineName!:string;
    description!:string;
    dosage!:string;
    price!:number;
    manufactureDate!:Date;
    expiryDate!:Date;
    currentStock!:number

     constructor(medicineId:number, medicineName:string, description:string, dosage:string, price:number, manufactureDate:Date, expiryDate:Date, currentStock:number) {
        this.medicineId = medicineId;
        this.medicineName = medicineName;
        this.description = description;
        this.dosage = dosage;
        this.price = price;
        this.manufactureDate = manufactureDate;
        this.expiryDate = expiryDate;
        this.currentStock = currentStock
     }
 }
