import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';

  // Inyectar el servicio
  // Con solo hacer esta inyección, Angular va llamar al constructor del servicio.
  constructor(
    public infoPaginaService: InfoPaginaService,
    public productosService: ProductosService
  ) {

  }
}
