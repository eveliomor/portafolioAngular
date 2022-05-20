import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Para utilizar el servicio info-pagina, se debe inyectar en el constructor
  constructor(
    public infoPaginaService: InfoPaginaService,
    private router: Router  // Se requiere para hacer la navegación interna en los componentes.
  ) { }

  ngOnInit(): void {
  }

  buscarProducto( termino: string ) {
    if (termino.length < 1){
      return;
    }

    this.router.navigate(['/search', termino]);

    console.log(termino);
  }
}
