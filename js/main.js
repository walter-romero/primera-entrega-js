
//PRODUCTOS
const productos = [
    {
      nombre: "harina",
      precio: 50,
    },
    {
      nombre: "galletitas",
      precio: 100,
    },
    {
      nombre: "pollo",
      precio: 150,
    },
    {
      nombre: "leche",
      precio: 400,
    },
    {
      nombre: "gaseosa",
      precio: 500,
    },
  ];

  //CARRITO
  let carrito = [];
  
  //INTERACTUANDO CON EL USUARIO
  let seleccion = prompt("hola desea comprar algo si o no");
  
  //CICLOS O BUCLES
  while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa una de las opciones, si o no");
    seleccion = prompt("hola desea comprar algo si o no");
  }

  //CONDICIONALES Y ARRAYS
  if (seleccion == "si") {
    alert("a continuación lista de productos");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "));
  } else if (seleccion == "no") {
    alert("gracias por venir al supermecado! hasta luego!");
  }
  
  //AVANZANDO EN LA COMPRA CON FLUJOS Y CONDICIONALES
  while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito!");
    let precio = 0;
  
    if (
      producto == "harina" ||
      producto == "galletitas" ||
      producto == "pollo" ||
      producto == "leche" ||
      producto == "gaseosa"
    ) {
   
      switch (producto) {
        case "harina":
          precio = 50;
          break;
        case "galletitas":
          precio = 100;
          break;
        case "pollo":
          precio = 150;
          break;
        case "leche":
          precio = 400;
          break;
        case "gaseosa":
          precio = 500;
          break;
        default:
          break;
      }
      let unidades = parseInt(prompt("cuantas unidades de ese producto quieres llevar"));
      
      //FINALIZANDO EL FLUJO DE LA COMPRA
      carrito.push({ producto, unidades, precio });
      console.log(carrito);
    } else {
      alert("no tenemos ese producto");
    }
  
    
   seleccion = prompt("quiere seguir comprando si o no");
  
  
   carrito.forEach((carritoFinal) => {
        console.log(
          `"producto:" ${carritoFinal.producto}, "unidades:" ${carritoFinal.unidades}, "total a pagar por producto:" ${
            carritoFinal.unidades * carritoFinal.precio
          }`
        );
      });
      break;
    }

  
  //CALCULANDO EL TOTAL A PAGAR
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  alert(`el total a pagar por su compra es de:  ${total}`);  