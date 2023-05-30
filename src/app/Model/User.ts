// export class User{

import { Medicine } from "./Medicine";

   
//    id!:number
//     firstName!:string;
//     lastName!:string;
//     contact!:string;
//     medicineName!:string;
//     price!:number;
//     constructor(firstName:string,lastName:string,medicineName:string,price:number,contact:string){}
    
//  }

export class User{
   id!:number;
    firstName!:string;
    lastName!:string;
    contact!:number;
    email!:string;
   
    medicineArray!:Medicine[];
    dob!:Date;

    

   //   constructor(id:number,firstName:string,lastName:string,email:string,contact:number, dob:Date){}
   constructor(Id: number, firstName: string, lastName: string, contactNo: number, email: string, medicine: Medicine, dob: Date) {
      // Assign the parameters to the corresponding class properties
      this.id = Id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.contact = contactNo;
      this.email = email;
      this.medicineArray = [medicine];
      this.dob = dob;
    }
    
}