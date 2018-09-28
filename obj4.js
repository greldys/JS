/*4.- Crear un archivo nuevo JS para resolver el siguiente problema:
 Un kiosco de comida rápida desea procesar las ventas del día. Para ello 
 dispone de los siguientes datos: precio del desayuno, almuerzo y cena
 respectivamente y cantidad de desayunos, almuerzos y cenas vendidos
 durante el día. Elabore el programa que permita imprimir: ingreso del
 kiosco por cada tipo de comida (desayuno, almuerzo y cena), 
 Total ingreso del día y promedio de los precios de las comidas.*/

var precio_desayuno = Math.random()*500;
var precio_cena = Math.random()*500;
var precio_almuerzo = Math.random()*500;
var total_ingreso_dia
var promedio

comidas_vend=Math.random()*100;
total_ingreso_dia=comidas_vend;
promedio = (precio_desayuno+precio_cena+precio_almuerzo)/3;

alert("ventas del dia"+""+total_ingreso_dia);
alert("promedio de los precios de la comida "+" "+promedio);

