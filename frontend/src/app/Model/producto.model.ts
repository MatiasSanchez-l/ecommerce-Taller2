export class Producto {
  constructor(
    public nombre: string,
    public descripcion: string,
    public clasificacion: string,
    public precio: number,
    public cantidad: number,
    public precioTotal: number,
    public id: string,
    public imagen: string
  ) {}
}
