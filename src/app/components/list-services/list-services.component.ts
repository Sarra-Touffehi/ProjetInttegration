import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/classes/service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {
services:Service[]=[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.services=this.service.getService();
   
  }

}
