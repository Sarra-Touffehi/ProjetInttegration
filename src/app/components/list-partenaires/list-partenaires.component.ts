import { Component, OnInit } from '@angular/core';
import { TypePartenaire } from 'src/app/classes/type-partenaire';
import { TypePartenaireService } from 'src/app/services/type-partenaire.service';

@Component({
  selector: 'app-list-partenaires',
  templateUrl: './list-partenaires.component.html',
  styleUrls: ['./list-partenaires.component.css']
})
export class ListPartenairesComponent implements OnInit {
  partenaires: TypePartenaire[] =[];
  constructor(private typePartenaireService: TypePartenaireService) { }

  ngOnInit(): void {
    this.partenaires = this.typePartenaireService.getPartenaire();
  }

}
