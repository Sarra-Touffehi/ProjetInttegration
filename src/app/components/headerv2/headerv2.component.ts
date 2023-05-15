import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerv2',
  templateUrl: './headerv2.component.html',
  styleUrls: ['./headerv2.component.css']
})
export class Headerv2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Afficher(){
    this.router.navigate(['/sign-in']);
  }
}
