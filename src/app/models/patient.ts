// export class patient {




//   constructeur (
//   patient_id :String,
//   fName :String,
//   lName :String,
//   address :String,
//   phone :String,
//   email :String,
//   dateBirth :Date){

//   }
// }
export class Patient {
  public constructor(init?: Partial<Patient>) {
        Object.assign(this, init);
    }
}
