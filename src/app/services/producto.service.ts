import { Injectable } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProductoService {

    productos: (IProducto|ITecnologia|IInmobiliaria|IMotor)[]= [
        {
          "id" : "test2",
          "nombre" : "PC",
          "descripcion" : "ueueweuew",
          "categoria" : "motor",
          "precio" : 55,
          "tipo" : "coche",
          "anyo" : 2010,
          "km" : 400
        },
        {
          "id" : "test",
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

    getProducto(id) : firebase.database.Reference{
      let ref = this._db.database.ref("productos");
      ref.orderByKey().equalTo(id);
      return ref;

    }

    setProducto(producto: IProducto|ITecnologia|IInmobiliaria|IMotor){
      let ref = this._db.database.ref("productos");
      let insert = ref.push(producto);
      let productId = insert.key;
      ref.child(productId).child("id").set(productId);

    }
}