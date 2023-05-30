export class Sales{
    saleId! : number
    medicineName! : string
    medicineQunatity! : number
    
    price!:number
    date!:Date

    constructor(id:number,medicineName:string,medicineQunatity:number,price:number,date:Date){
        this.saleId=id
        this.medicineName=medicineName
       this.medicineQunatity=medicineQunatity
       this.price=price
        this.date=date
       
    }
}
