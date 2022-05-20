import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // Crear propiedad producto
  producto!: ProductoDescripcion;
  id!: string;

  constructor(
    private route: ActivatedRoute,  // servicio para leer parametros del url
    public productosService: ProductosService ) { }

  ngOnInit(): void {
    // El subscribe va estar pendiente de todos los cambios en parametros del URL
    this.route.params
      .subscribe((parametros) => {
        // Se hace referencia al servicio, pero para ejecutarlo se debe hacer subscribe.
        this.productosService.getProducto(parametros['id'])
          .subscribe( (producto: any) => {
              //console.log(producto);
              this.id = parametros['id'];
              this.producto = producto;
            });
      });
  }

}
