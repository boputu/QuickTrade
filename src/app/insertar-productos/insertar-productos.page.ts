import { Component, OnInit } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-insertar-productos',
  templateUrl: './insertar-productos.page.html',
  styleUrls: ['./insertar-productos.page.scss'],
})
export class InsertarProductosPage implements OnInit {

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

  productos: (IProducto|ITecnologia|IInmobiliaria|IMotor)[];

  provincias = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
  'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
  'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
  'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
  'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];

  constructor(private _toastCtrl : ToastController, private _productoService : ProductoService) { }

  ngOnInit() {
  }

  async presentToast(){
    const toast = await this._toastCtrl.create({
      message: 'Producto insertado correctamente',
      duration: 2000,
      position: "top"
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
