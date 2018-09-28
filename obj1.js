/*Usando números aleatorios para las entradas y mensajes en la cónsola 
para las salidas, realizar las siguientes actividades:
1.- Crear un archivo nuevo JS para resolver el siguiente problema:
 Una agencia de carros 
paga a su personal de ventas un salario base de 500.000 Bs. más una comisión
de 200.000 Bs. por cada automóvil vendido, 
más el 10% del valor total de las ventas. 
Si se tiene como entrada el nombre del vendedor, el número de autos vendidos
 y el valor total de sus ventas. Se pide calcular e imprimir el salario neto 
 del vendedor.*/

const salario_base = 500000; 
 const comisión = 200000;
 var valor_total_ventas = 0.10;

 var nombre_vend=prompt ("ingrese su nombre");
  var nro_vendidos  = Math.ceil(Math.random()*10);
 alert("nombre del vendedor:"+nombre_vend+"numero de autos vendidos:"+nro_vendidos);


 neto= salario_base+(comisión*nro_vendidos);

 salario_neto = neto+valor_total_ventas;
salario_neto =  salario_neto;
alert("salario neto"+""+salario_neto);