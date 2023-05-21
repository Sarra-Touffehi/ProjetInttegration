import { Service } from "./service";

export class Reservation {
    constructor(public idReservation:number,public date:Date,public service:Service){}
}
/*private int idReservation;
	private LocalDateTime date;
	private Service service;*/