Inicio = true;
while (Inicio == true) {
console.log("_______________________________");
console.log("---- Bienvenido a Campulands ----");
console.log("---- 1. Iniciar como Camper ----");
console.log("---- 2. Iniciar como Trainer ----");
console.log("---- 3. Iniciar como Coordinador -");
console.log("_______________________________");

alert("Bienvenido a Campulands");
let opcion = prompt("Selecciona una opción:\n 1.Camper\n 2.Trainer\n 3.Coordinador\n 4.Salir\n");
InicioSesion = true;
    while (InicioSesion == true) {
      if (opcion == 1){
      alert("Has iniciado como Camper. ");
      camper = true;
      let usuario = prompt("¿Quieres registrarte o iniciar sesión:\n 1. Registrarte\n 2. Iniciar sesión\n:");
      if (usuario == 1){
      alert("Has elegido registrarte como Camper.");
      let nombre = prompt("Ingresa tu nombre: ");
      let apellido = prompt("Ingresa tu apellido: ");
      let correo = prompt("Ingresa tu correo: ");
      let contraseña = prompt("Ingresa tu contraseña: ");
      alert("Te has registrado como Camper. \n Nombre: " + nombre + "\n Apellido: " + apellido + "\n Correo: " + correo);
  };
  Camper_Inicio = true;
    while (Camper_Inicio == true) {
      let opcionCamper = prompt("Selecciona una opcion :\n1. Ver Información\n2. Ver Notas\n3. Ver Horario y salon\n4. Salir");
      if (opcionCamper == 1) {
      alert("Información:\n Nombre: " + nombre + "\n Apellido: " + apellido + "\n Correo: " + correo);

      } else if (opcionCamper == 2) {
      alert("Ver Notas");

      } else if (opcionCamper == 3) {
      alert("Ver Horarios y salon");

      } else if (opcionCamper == 4) {
      alert("Saliendo de la sección Camper...");
      Camper_Inicio = false;
      } else {
      alert("Opción no válida");
      
      }
    }
  } else if (usuario == 2){
    Camper_Inicio = true;
    while (Camper_Inicio == true) {
    alert("Has elegido iniciar sesión como Camper.");
    let correo = prompt("Ingresa tu correo: ");
    let contraseña = prompt("Ingresa tu contraseña: ");
    let contraseña1 = prompt("Confirma tu contraseña: ");
    alert("Has iniciado sesión como Camper. \n Correo: " + correo);
  }
  let opcionCamper = prompt("Selecciona una opcion :\n1. Ver Información\n2. Ver Notas\n3. Ver Horarios y salon\n4. Salir");
  if (opcionCamper == 1) {
  alert("Ver Información");
  } else if (opcionCamper == 2) {
  alert("Ver Notas");
  } else if (opcionCamper == 3) {
  alert("Ver Horarios y salon");
  } else if (opcionCamper == 4) {
  alert("Saliendo de la sección Camper...");
  Camper_Inicio = false;
  } else {
  alert("Opción no válida");
  }
  } 
 else if(opcion == 2){
  alert("Has iniciado como Trainer. ");
  trainer = true;
}
else if(opcion == 3){
  alert("Has iniciado como Coordinador");
  coordinador = true;
}
else{
  alert("Opción no válida");
}
}
}