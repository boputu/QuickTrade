import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  id : number;
  producto: (IProducto|ITecnologia|IInmobiliaria|IMotor);
  key: string;

  constructor(private _activatedRoute: ActivatedRoute, private _productoService : ProductoService) { }

  /*ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    //this.producto = this._productoService.getProducto(this.id);
   }*/

   ngOnInit(){
    let ref = this._productoService.getProductos();
    
    ref.on("value", snapshot => {
      snapshot.forEach(child =>{
        let value = child.key;
        this.key = value;
        console.log("he encontrado: " +child.key);
      })
    })
    }

}
