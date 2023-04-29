class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades = 1) {
      const producto = new Producto(nombre, precio, unidades);
      this.montoTotal += precio*unidades;
      this.productos.push(producto);
    }
    
  }
  