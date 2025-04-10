export function datosdecampers() {
    const numeroid = prompt("Ingresa tu numero de Identificación ");
    const nombre = prompt("Ingresa tus nombres");
    const apellido = prompt("Ingresa tus apellidos ");
    const direccion = prompt("Ingresa tu dirección ");
    const acudiente = prompt("Ingresa el nombre del acudiente ");
    const telefono = prompt("Ingresa tu número de teléfono ");
    const curso = "";
    campers.push({
        "#NumeroDeIdentificación": numeroid,
        "Nombre": nombre,
        "apellidos": apellido,
        "Direccion": direccion,
        "acudiente": acudiente,
        "Telefono": telefono,
        "Estado": {
            "En proceso": false,
            "Inscrito": true,
            "Aprobado": true,
            "Rechazado": false,
            "Cursando": false,
            "Graduado": false,
            "Expulsado": false,
            "Retirado": false
        },
        "Riesgo": false,
        "Salon": curso,
        "notas": {
            "modulo1": 0.0,
            "modulo2": 0.0,
            "modulo3": 0.0,
            "modulo4": 0.0,
            "modulo5": 0.0
        }
    }
    );

    alert("Gracias por realizar la inscripción, en breve nos comunicaremos contigo para brindarte más información sobre el proceso de inscripción.");
}
const campers = {
  "0": {
    "#NumeroDeIdentificacion": 0,
    "Contraseña": 0,
    "Nombres": "Sayara Yurley",
    "apellidos": "aparicio arciniegas",
    "Direccion": "Cra 28w #64-63",
    "acudiente": "Claudia arciniegas",
    "Telefonos": "3164388588",
    "Estado": "Inscrito",
    "Jornada": "",
    "Ruta": {}
  },
  "1": {
    "#NumeroDeIdentificacion": 1,
    "Contraseña": 1,
    "Nombres": "Harley Yefrey",
    "apellidos": "Cabrales Vargas",
    "Direccion": "cll 12a #9-68",
    "acudiente": "Yadira Vargas",
    "Telefonos": "3134822492",
    "Estado": "Inscrito",
    "Jornada": "",
    "Ruta": {}
  },
  "2": {
    "#NumeroDeIdentificacion": 2,
    "Contraseña": 2,
    "Nombres": "Adrian",
    "apellidos": "Quintero Pinzon",
    "Direccion": "cll 15 #8-70",
    "acudiente": "Carlos Quintero",
    "Telefonos": "3125890142",
    "Estado": "Inscrito",
    "Jornada": "",
    "Ruta": {}
  },
  "3": {
    "#NumeroDeIdentificacion": 3,
    "Contraseña": 3,
    "Nombres": "Alejandra",
    "apellidos": "Pinzon Alvarez",
    "Direccion": "cll 4 #10-22",
    "acudiente": "Ana Pinzon",
    "Telefonos": "3142381597",
    "Estado": "Inscrito",
    "Jornada": "",
    "Ruta": {}
  },
  "4": {
    "#NumeroDeIdentificacion": 4,
    "Contraseña": 4,
    "Nombres": "Ambar Isabella",
    "apellidos": "Plata Lopez",
    "Direccion": "cll 20 #12-45",
    "acudiente": "Fernando Plata",
    "Telefonos": "3194735201",
    "Estado": "Inscrito",
    "Jornada": "",
    "Ruta": {}
  }
};

console.log(campers);
