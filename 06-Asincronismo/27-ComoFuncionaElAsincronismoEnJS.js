/**
 * 27. COMO FUNCIONA EL ASINCRONISMO EN JS
 * ------------------------------------
 * JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas
 * funciones a otros procesos. Este modelo de concurrencia se llama EventLoop.
 * 
 * JavaScript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas
 * al ser completadas. Estas funciones se llaman CallBacks, y una vez que el navegador ha regresado con la respuesta,
 * el CallBack asociado pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas las instrucciones
 * que están en la pila de ejecución.
 * 
 * Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando procesos muy pesados, el EventLoop
 * quedará bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.
 */

 /**
  * https://www.youtube.com/watch?v=PndHsDpEfhU&list=PLImOJ2OqvvkCuDi6E33HXMP23BvYYBHcm

  IDEAS CLAVES
Javascript solo puede hacer una cosa a la vez independiente de la potencia de tu computador.

¿Cómo funciona la máquina del asincronismo en javascript?

javascript Puede delegar la ejecucion de ciertas funciones a otros procesos
1.1 Este es el modelo de concurrencia event loop

Javascript tiene una pila de ejecucion (como si fuera un estante con notas de pedidos, se acumula).
2.1 Cuando termina una función en la pila de ejecución (cuando se despacha del pedido) la saca de la pila (el estante) y la bota.

calllback es una funcion que se ejecutará cuando regrese la respuesta del servidor u otra función.
3.1 Mientras existe un callback javascript sigue despachando otros pedidos (ejecutando el codigo principal).
3.2 Cuando llega la respuesta (lo que se necesitaba para el pedido) js lo mete en la cola de tareas (area de despacho) (peticiones a servidor, interacccion visual, eventos programados)

4.En la cola de tareas javascripta encola funciones (pedidos) según van llegando
4.1 Solo cuando se quede sin programas en la pila de ejecución (estante con notas de pedidos) es que va a la cola de tareas (zona de despacho)

Por lo tanto

=> EVITA CUELLOS DE BOTELLA EN LA PILA DE EJECUCIÒN
=> No voy a bloquear el event loop

  */