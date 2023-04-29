class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.montoTotal += producto.precio;
      this.productos.push(producto);
    }
  }

  
const leche = new Producto("Leche", 10);
const carritoNuevo = new Carrito();
carritoNuevo.agregarProducto(leche);
