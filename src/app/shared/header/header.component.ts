import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Para utilizar el servicio info-pagina, se debe inyectar en el constructor
  constructor( public infoPaginaService: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
