// Definir un objeto con las prendas y sus precios
const prendas = {
    "Pantalon": 15000,
    "Camisa": 12499,
    "Campera": 22000,
    "Zapatillas": 19900,
    "Bufanda": 7850,
  };
  
  // Definir variables para el total y el descuento
  let total = 0;
  let descuento = 0;
  
  // Mostrar las opciones de prendas y sus precios al usuario
  let mensaje = "Bienvenido a nuestra tienda. Estas son las prendas que tenemos disponibles en este momento :\n\n";
  for (const prenda in prendas) {
    mensaje += `${prenda}: ${prendas[prenda]} pesos\n`;
  }
  alert(mensaje);
  
  // Ciclo para que el usuario elija prendas
  while (true) {
    const prenda = prompt("Elegi una prenda (o escribí 'comprar' para finalizar la compra): ");
    if (prenda.toLowerCase() === "comprar") {
      break;
    }
    if (prendas[prenda]) {
      total += prendas[prenda];
      alert(`Agregaste "${prenda}" por ${prendas[prenda]} pesos.\n\nTotal: ${total} pesos.`);
    } else {
      alert(`La prenda "${prenda}" no está disponible.`);
    }
  }
  
  // Preguntar por el código de descuento
  const codigo = prompt("¿Tenes un código de descuento? Ingrese el código de descuento o escriba 'no' si no tenes:");
  
  if (codigo === "1234") {
    descuento = total * 0.15;
    alert("Se ha aplicado el descuento del 15%.\n\nTotal con descuento: " + (total - descuento) + " pesos.");
  } else {
    alert("Total: " + total + " pesos.");
  }
  
  // Función para mostrar un mensaje de despedida
  function despedida() {
    alert("Tu compra fue realizada, gracias. ¡Te esperamos con más opciones para tu vida diaria!");
  }
  
  // Ciclo para preguntar si el usuario quiere comprar o no
  while (true) {
    const respuesta = prompt("¿Deseas comprar? (si o no)");
    if (respuesta.toLowerCase() === "si") {
      despedida();
      break;
    } else if (respuesta.toLowerCase() === "no") {
      alert("Esperamos que vuelvas pronto");
      break;
    } else {
      alert("No entendí tu respuesta. Por favor escribí 'si' o 'no'.");
    }
  }
  