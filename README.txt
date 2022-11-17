Implementación del conocido juego del sudoku (https://es.wikipedia.org/wiki/Sudoku) con la utilización de APIs de HTML.

El juego a desarrollar es el típico juego del sudoku. En esta implementación se permitirá al usuario elegir entre dos tamaños: 4 y 9.
El juego comenzará en la página index.html, en la que se mostrará el tablero del juego, del tamaño seleccionado por el usuario,
pero vacío, junto a un botón para empezar el juego.
Para la realización,se proporciona un servidor RESTful muy simple. El servidor realiza dos funciones básicas: generar sudokus
del tamaño que se le indique y comprobar los errores que tengan los números que ha puesto el usuario.
También se proporciona un script de creación de la base de datos del juego, en la que el servidor guardará los sudokus creados,
de manera que pueda haber más de una partida jugándose al mismo tiempo. El servidor también accederá a la base de datos para
comprobar los errores cometidos por el jugador de un sudoku determinado y eliminar los sudokus finalizados.