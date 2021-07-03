#HACKATON 13

Reto 1
TÍTULO: Callbacks y promesas
¿Por qué utilizar Promesas?
EL PROBLEMA:
Al escribir código asíncrono, tendremos que definir funciones que se ejecuten al finalizar un proceso o una llamada asíncrona, a esto se les denomina callbacks, pero si desarrollamos con este enfoque podremos caer en el problema del conocido callback hell.
Para evitar el callback hell, podremos usar promesas para no anidar de manera tan profunda.

PREGUNTAS:
● ¿Por qué evitar los callbacks en las llamadas asíncronas?
Los callbacks es solo el nombre que se usa para referirse a ciertas funciones de JavaScript. No existe algo llamado callback en el lenguaje JavaScript, es solo una convención. En lugar de devolver inmediatamente un resultado como la mayoría de las funciones, las funciones que utilizan callbacks toman un tiempo para producir un resultado. La palabra “asíncrono”, también conocido como “async” solo significa “requiere algo de tiempo” o “sucede en el futuro, no en este momento”. Por lo general, los callbacks solo se utilizan al hacer I/O, por ejemplo descargar cosas, leer archivos, hablar con bases de datos, etc.

● ¿Qué es una promesa?
Una Promisa es un objeto que representa la terminación o el fracaso de una operación asíncrona.
Una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.

● ¿Qué es el callback hell?
Un callback hell es cuando se intenta escribir JavaScript de forma tal que la ejecución se realiza visualmente de arriba a abajo. En otras palabras existe la expectativa de que todo lo que sucede en la línea 1 finalizará antes de que el código en la línea 2 comience a ejecutarse, y así sucesivamente en el archivo.
