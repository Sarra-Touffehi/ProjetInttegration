import { Reservation } from "./reservation";

export class Commande {
    constructor(public idCommande:number,public prixTotal:number, reservations:Reservation[]){

    }
}
