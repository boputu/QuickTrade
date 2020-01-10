import { Injectable } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';

@Injectable()

export class ProductoService {

    productos: (IProducto|ITecnologia|IInmobiliaria|IMotor)[]= [
        {
          "id" : 1,
          "nombre" : "PC",
          "descripcion" : "ueueweuew",
          "categoria" : "motor",
          "precio" : 55,
          "tipo" : "coche",
          "anyo" : 2010,
          "km" : 400
        },
        {
          "id" : 2,
          "nombre" : "motico",
          "descripcion" : "ueueweuew",
          "categoria" : "hogar",
          "precio" : 55
        },
      ];

    getProductos(): (IProducto|ITecnologia|IInmobiliaria|IMotor)[]{
        return this.productos;

    }

    getProducto(id : number) : (IProducto|ITecnologia|IInmobiliaria|IMotor){
        return this.productos.find(x => x.id == id);
    }

}