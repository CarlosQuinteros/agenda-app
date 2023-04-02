import { Component, OnInit } from '@angular/core';
import { PersonaService } from './servicios/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private personaSer : PersonaService){

  }
  
  ngOnInit(): void {
  }

  title = 'agenda-app';

}
