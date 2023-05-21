import { Commande } from "./commande";

export class Client {
    constructor(public idUser:number,public nom:string,public prenom:string, public dateNaissance: Date,public email:string,public tel:string,public rue:string, 
        public ville:string,public region:string,public codePostal:string,commandes:Commande[]){}

}
//private int idUser;
	//private String nom;
	//private String email;
	//private String tel;
	//private String rue;
	//private String ville;
	//private String region;
	//private String codePostal;
	//private String prenom;
	//private LocalDate dateNaissance;
	//private List<Commande> commandes;