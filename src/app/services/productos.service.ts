import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : Producto[] = [];
  productos_filtrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  private cargarProductos() {
    // Manejando Promise para esperar la carga del arreglo de productos
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-9bf89-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: any) => {
          this.productos = resp;
          this.cargando = false;
        });
    });
  }

  getProducto( id: string ) {
    // Regresar toda la definición del observable con return.
    return this.http.get( `https://angular-html-9bf89-default-rtdb.firebaseio.com/productos/${ id }.json` );
  }

  buscarProducto( termino: string ) {
    if (this.productos.length === 0){
      // cargar productos
      this.cargarProductos().then(() => { // ejecutar después de tener los productos
        // aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplicar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos( termino: string ){
    this.productos_filtrado = [];   // purgar el array
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( (prod: any) => {
      const cTitulo = prod.titulo.toLocaleLowerCase();
      const cCatego = prod.categoria.toLocaleLowerCase();
      if (cCatego.indexOf(termino) >= 0 || cTitulo.indexOf( termino ) >= 0) {
        this.productos_filtrado.push(prod);
      }
    });
  }
}
