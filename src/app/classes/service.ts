import { Time } from "@angular/common";

export class Service {
    constructor(public idService:number,public libelle:string, 
        public description:string,public prix:number,
        public duree:Date,public image:string){}
}
