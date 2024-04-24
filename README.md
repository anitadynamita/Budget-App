# Budget App

Esta es una aplicación web de gestión de presupuesto que permite a los usuarios establecer un presupuesto total, agregar gastos, editar y eliminar gastos, y ver el saldo actualizado en tiempo real.

## Características

- Establecer un presupuesto total.
- Agregar gastos con un título y un costo.
- Editar gastos existentes.
- Eliminar gastos de la lista.
- Ver el saldo actualizado después de cada transacción.

## Estructura del Código

El código JavaScript está organizado de la siguiente manera:

1. **Selección de Elementos del DOM y Asignación de Variables:** Se seleccionan elementos del DOM utilizando métodos como `document.getElementById()` y se asignan a variables para su posterior uso en el script.

2. **Event Listeners:** Se añaden event listeners a los botones relevantes para detectar las acciones del usuario, como establecer el presupuesto total o agregar gastos. Cuando se activa un evento, se llama a una función asociada para manejar la acción correspondiente.

3. **Funciones:** Se definen varias funciones para modularizar la lógica y promover la reutilización del código. Estas funciones incluyen la validación de entradas, la creación de nuevos elementos en la lista de gastos, la modificación y eliminación de elementos existentes, y la actualización del saldo y los gastos totales.

4. **Manipulación del DOM:** El código JavaScript manipula dinámicamente el Document Object Model (DOM) para actualizar la interfaz de usuario en respuesta a las acciones del usuario. Se añaden, modifican y eliminan elementos de la página web según sea necesario para reflejar el estado actual del presupuesto.

## Ejecución del Proyecto

Para ejecutar el proyecto, simplemente abre el archivo HTML en un navegador web compatible con JavaScript. A continuación, puedes interactuar con la aplicación de la siguiente manera:

1. Establece un presupuesto total introduciendo un valor en el campo correspondiente y haciendo clic en el botón "Set Budget".
2. Agrega gastos ingresando un título y un costo en los campos respectivos y haciendo clic en el botón "Check Amount".
3. Edita un gasto existente haciendo clic en el icono de edición (lápiz) junto al elemento de la lista.
4. Elimina un gasto de la lista haciendo clic en el icono de eliminación (papelera) junto al elemento de la lista.

El saldo y los gastos totales se actualizan automáticamente después de cada transacción, y los mensajes de error se muestran si se ingresan datos incorrectos o incompletos.

¡Disfruta utilizando la aplicación de presupuesto y mantén un mejor control de tus finanzas!
