import { Component, OnInit } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  oculto : boolean = false;

  rutaMotor : string = "../../assets/motor.jfif"

  productos: (IProducto|ITecnologia|IInmobiliaria|IMotor)[] = [];


constructor(private _toastCtrl : ToastController, private _productoService : ProductoService){}

ngOnInit(){
let ref = this._productoService.getProductos();

ref.on("value", snapshot => {
  snapshot.forEach(child =>{
    let value = child.val();
    this.productos.push(value);
    console.log("he encontrado: " +child.val().nombre)
  })
})
}

cambiar_oculto(){
  this.oculto = !this.oculto;
}

search(){
  this._productoService.search("EZWPdoS5rVdG4P54sRBV4YiNOgv1");
}

}
