import { Component, OnInit } from '@angular/core';
import 'animate.css';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( public infoPaginaService: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
