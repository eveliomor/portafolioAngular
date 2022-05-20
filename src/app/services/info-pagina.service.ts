import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

// El servicio es inyectado en el nivel raiz de la app.
// Por eso, ahora no se agrega ninguna referencia en la sección providers del app.module.ts
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // Para no definir el objeto como any, que aceptaría cualquier cosa, podemos crear una interface
  // que tenga la misma estructura del archivo JSON que queremos cargar.
  //info: any = {};

  // No podemos asignarle un objeto vació a la interface, por lo cual se modifica la interface para que sus propiedades sean opcionales (?)
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el archivo JSON y tomar sus propiedades para que puedan ser utilizadas en las páginas.
    // Para eso ocupamos importar el modulo HttpClientModule para realizar las peticiones HTPP (app.module.ts)
    // Luego, se inyecta el servicio para realizar las peticiones REST a servidores locales o externos (HttpClient).
    // Ahora, ya podemos leer el archivo JSON:
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada  = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-9bf89-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: any) => {
        this.equipo = resp;
      });
  }
}
