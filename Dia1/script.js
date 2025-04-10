//##############################
//Ejercicios
//##############################
// Primeros pasos en js
console.log("Hola Mundo");
//Datos primitivas - Numeros "Enteros"
numerito1 = 1;
numerito2 = 2.14;
console.log(typeof numerito1);
console.log(typeof numerito2);
numerito3 = numerito1 + numerito2;
//Concatenacion general
console.log(numerito3 + "" + typeof numerito3);
// Operaciones Generales (PEMDAS)
operacion=(((((5*2)**2)+256)/5)*2);
console.log(operacion);
operacion2 = operacion%2;
console.log(operacion2);
//Booleanos
booleano1 = true;
booleano2 = false;
booleano3 = false;
booleano4 = true;
operadoresBandera = (booleano1 && booleano2)
console.log(operadoresBandera);
//Funcion sin parametros y sin retornos
function mensaje() {
    console.log("Hola Mundo");
};
//Funcion sin parametros y con retoro
function mensajeR(){
    return "Hola Mundo";
};
console.log(mensajeR()+ " y mensaje adicional!!!");
//Funcion con parametros pero sin retorno
function suma (a,b){
    console.log(a+b);
};
suma(5,7); 
//Tipo de variable let
let saludar = "Hola";
saludar = "campuslands";
//Tipo de variable var
var saludo1 = "Saludo Falso";
var saludo1 = "1";
//Tipo de variable const
const contraseñaDelicada = 1234567890;
contraseñaDelicada = 6;

//Condicional if - else
let booleanito = false;
if (booleanito == true) {
    console.log("Boooleanito es verdadero en su ser");
} else{
    console.log("Booleanito es severo falso");

};

//el "huilé" - while
let booleanito2 = true;
while(booleanito2 == true){
    console.log("Que viva el estudio!");
    booleanito2=false;
}
//for "todo lo que empieza - termina"
for(let i=1;i<10;i=i+1){
    console.log(i);
}
//Declaración de una variable de arreglo(array)
let numeros = [1,2,3,4,5];

//Desarrollado por: Sayara Aparicio - ID: 1.098.679.990