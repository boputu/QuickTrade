import { Component } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre : string;
  descripcion : string;
  precio : number;
  categoria : string ;
  estado : string ;
  metrosCuadrados : number ;
  numeroBanyos : number ;
  numeroHabitaciones : number ;
  localidad : string ;
  tipo : string ;
  anyo : number ;
  km : number ;

  oculto : boolean = false;

  rutaMotor : string = "../../assets/motor.jfif"

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


  provincias = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
  'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
  'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
  'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
  'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];


constructor(private _toastCtrl : ToastController){}

cambiar_oculto(){
  this.oculto = !this.oculto;
}

async presentToast(){
  const toast = await this._toastCtrl.create({
    message: 'Producto insertado correctamente',
    duration: 2000,
    position: "bottom"
  });
  toast.present();
}

insertar(){
  this.productos.push(
    {
      "id" : this.productos.length+1,
      "nombre" : this.nombre,
      "descripcion" : this.descripcion,
      "precio" : this.precio,
      "categoria" : this.categoria,
      "estado" : this.estado,
      "metrosCuadrados" : this.metrosCuadrados,
      "numeroBanyos" : this.numeroBanyos,
      "numeroHabitaciones" : this.numeroHabitaciones,
      "localidad" : this.localidad,
      "tipo" : this.tipo,
      "anyo" : this.anyo,
      "km" : this.km
    }
  );
  this.presentToast();

}

}
