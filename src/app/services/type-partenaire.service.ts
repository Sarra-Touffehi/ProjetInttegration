import { Injectable } from '@angular/core';
import { TypePartenaire } from '../classes/type-partenaire';

@Injectable({
  providedIn: 'root'
})
export class TypePartenaireService {
  listPartenaires : TypePartenaire[] = [
     new TypePartenaire(1, "Fleuriste"),
     new TypePartenaire(2, "Photographe"),
     new TypePartenaire(3, "Traiteur"),
     new TypePartenaire(4, "Coiffeur"),
     new TypePartenaire(5, "Salles"),

  ];

  constructor() { }
  getPartenaire(){
    return this.listPartenaires;
  }
}
