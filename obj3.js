/*3.- Crear un archivo nuevo JS para resolver el siguiente problema: 
Una compañía dedicada a la venta de vehículos ofrece a sus clientes el 
siguiente sistema de pago: Una cuota inicial del 30% del costo del vehículo
y la diferencia debe ser cancelada en cuotas mensuales iguales y 
consecutivas durante 2 años. Cuando un cliente compra un vehículo la 
compañía requiere un informe que contenga: a.- Nombre del cliente. b.- Cuota
inicial. c.- Monto de las cuotas mensuales. Como dato de entrada se tiene
 nombre del cliente y precio del vehículo.*/

 var costo_vehiculo = Math.random()*1000000;
 var diferencia
 var nombre_cliente=prompt ("ingrese su nombre");
 var cuota_inicial
 var monto_cuotas_m
alert("costo del vehiculo"+" "+costo_vehiculo)
cuota_inicial=costo_vehiculo*costo_vehiculo*0.30;
diferencia=costo_vehiculo-cuota_inicial;
monto_cuotas_m=diferencia/24
alert("nombre del cliente"+" "+nombre_cliente)
alert("cuota inicial"+" "+cuota_inicial)
alert("monto de las cuotas mensuales"+" "+monto_cuotas_m)

