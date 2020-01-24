export interface IProducto {
  "id" : number,
  "nombre" : string,
  "descripcion" : string,
  "categoria" : string,
  "precio" : number
}

export interface ITecnologia extends IProducto {
  "estado" : string
}

export interface IInmobiliaria extends IProducto {
  "metrosCuadrados" : number,
  "numeroBanyos" : number,
  "numeroHabitaciones" : number,
  "localidad" : string
}

export interface IMotor extends IProducto {
  "tipo" : string,
  "anyo" : number,
  "km" : number
}