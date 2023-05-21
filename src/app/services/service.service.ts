import { Injectable } from '@angular/core';
import { Service } from '../classes/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  listservices:Service[]=[
    new Service(1," Salle de fêtes","My Way , un espace magnifique et polyvalent situé au Lac 2 avec une capacité d'accueil pouvant aller jusqu'à 200 invités.Notre salle de fêtes est entièrement équipée pour répondre à tous vos besoins",5000,
    new Date(),"../../../assets/myway.jpg"),
   /* new Service(2," Salle de fêtes","MARIAGE PRESTIGE , est très heureux de vous accueillir au Lac 2 pour la célébration de votre mariage.Un espace  au RDC pouvant accueillir 300 personnes à l'intérieur. La mise en place de l'espace, pour la signature du contrat de mariage, inclue 100 chaises en style théâtre. Pour votre réception de mariage, un grand espace (espace couvert) est disponible pour partager les vœux de vos invités et célébrer votre réception de mariage dans un endroit enchanteur, chic et prestigieux."
    ,4500,new Date(),"../../../assets/marriageprestige.jpg")*/
    new Service(2," Bouquet de fleurs","Notre bouquet de fleurs est conçu pour capturer l'essence de la nature et apporter une touche de joie et de couleur à votre soirée. Les fleurs sélectionnées sont des variétés de première qualité, cueillies à la main pour garantir leur fraîcheur et leur longévité.",250,
    new Date(), "../../../assets/bouquet1.jpg"),
    new Service(3,"Menu ","un menu composé de  100 plats Couscous avec des salades variées ",700,
    new Date(), "../../../assets/couscous.jpg"),
    
  ]

  constructor() {}
    getService(){
      return this.listservices;}
   
}

