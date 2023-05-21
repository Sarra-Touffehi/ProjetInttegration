import { Service } from "./service";

export class Partenaire {
    constructor(public idUser:number,public nom:string,public  email:string,public tel:string,public rue:string,
        public ville:string,public region:string,public codePostal:string,public services:Service[] ){}
}
