// bases de datos //
let users = [
    {
        "id": 1,
        "Nombres": "Sayara Yurley",
        "Apellidos": "Aparicio Arciniegas",
        "Edad": 17
    },
    {
        "id": 2,
        "Nombres": "Naya Zarela",
        "Apellidos": "Lizcano Jaimes",
        "Edad": 18
    },
    {
        "id": 3,
        "Nombres": "Dante",
        "Apellidos": "Salamanca",
        "Edad": 17
    }
];
//funcion añadir
export function añadir(){
    let id = prompt("Ingresa tu id del nuevo usuario");
    let nombres = prompt("Ingresa tus nombres");
    let apellidos = prompt("Ingresa tus apellidos");
    let edad = prompt("Ingresa tu edad");
    users.push({
        "id": id,
        "Nombres": nombres,
        "Apellidos": apellidos,
        "Edad": edad
    });
    alert("Usuario añadido con éxito");
}

// funcion ver usuarios
export function verUsarios(
){
    let leng= users.length
    for (let i=0;i>leng;i++){
    alert(
        "id: " + users[i]["id"] + "\n" +
        "Nombres: " + users[i]["Nombres"] + "\n" +
        "Apellidos: " + users["Apellidos"] + "\n" +
        "Edad: " + users[i]["Edad"] + "\n" 
    )
}
}

//funcion eliminar 
export function eliminar(){
    verUsarios();
    let eli=prompt("Ingrese el número de la lista del usuario que usuario deseas eliminar");
    users.pop(eli-1);

}

// funcion editar
export function editar(){
    verUsarios();
    let id=prompt("Ingrese el id del usuario que desea editar");
    let nombres=prompt("Ingrese los nuevos nombres");
    let apellidos=prompt("Ingrese los nuevos apellidos");
    let edad=prompt("Ingrese la nueva edad");
    users[id-1].Nombres=nombres;
    users[id-1].Apellidos=apellidos;
    users[id-1].Edad=edad;
}