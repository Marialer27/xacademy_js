class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades = 1) {
      const productoExistente = this.productos.find(producto => producto.nombre === nombre);
      if (productoExistente) {
        console.log(`Ya existe el producto: ${nombre}`);
        return;
      }
      const producto = new Producto(nombre, precio, unidades);
      this.montoTotal += precio*unidades;
      this.productos.push(producto);
    }
  }
  
  agregarProducto("Azucar", 5, 2);