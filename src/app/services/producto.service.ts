import { Injectable } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

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

      constructor(private _db: AngularFireDatabase){

      }

    getProductos(): firebase.database.Reference{
        let ref = this._db.database.ref("productos");
        return ref;
    }

    getProducto() : firebase.database.Reference{
      let ref = this._db.database.ref("productos");
      return ref;
        //return this.productos.find(x => x.id == id);
    }

    setProducto(producto: IProducto|ITecnologia|IInmobiliaria|IMotor){
      let ref = this._db.database.ref("productos");
      ref.push(producto);
    }
}