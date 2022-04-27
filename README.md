# Week 4 - Challenge 3

## Teléfono React

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

- Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
- Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
- No se puede introducir un número de más de 9 cifras.
- El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
- El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
- Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
- Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
- Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.

Separa todo en los siguientes componentes:

- Info
- Display
- Actions
  - Action
- Keyboard
  - Key

Guarda los estados comunes en un context.

##App

- Sólo se verá o el botón Llamar o el botón Colgar de pendiendo del estado.

##Info

- Renderiza un texto
- Estado de llamada
- Estado de llamada termimada

##Display

- Renderiza un componente action/input con numeros recibidos.
- Estado llamada
- Estado llamada terminada

##Actions

- Renderiza un botton Call que se activa cuando display tiene 9 numeros ( Estado llamada )
- Renderiza un botton Hang que se activa cuando se cambia el estado de llamada (Estado llamada terminada )

##Action button

- Renderiza un button con texto recibido
- Pasa la accion recibida

##Keyboard

- Renderiza key para cada numero de 0 a 9 y renderiza el valor "delete".
- Pasa la accion a cada de los key para mostrar los numeros en el display.

##Key
-Renderiza un button con un texto recibido.
