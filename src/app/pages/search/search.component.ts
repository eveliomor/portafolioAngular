import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Para que la pagina de busqueda reciba el argumento (termino), es necesario el ActivatedRoute
  constructor( private route: ActivatedRoute,
    public productosService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( parametro => {
        console.log(parametro['termino']);

        this.productosService.buscarProducto(parametro['termino']);
      });
  }

}
