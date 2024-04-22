//seleciono los elementos del DOM y asigno variables

let totalAmount = document.getElementById("total-amount");// aqui entro la cantidad total de presupuesto
let userAmount = document.getElementById("user-amount"); // aqui entrada de lo que cuesta el producto: alquiler, comida, gas, luz...
const checkAmountButton = document.getElementById("check-amount");//boton que añade los gastos de las expenses

const totalAmountButton = document.getElementById("total-amount-button");//boton que añade el presupuesto total que le indicamos

const productTitle = document.getElementById("product title");//input del nombre del producto que añadimos

//AQUÍ MENSAJES DE ERRROR//

const errorMessage = document.getElementById("budget-error");//Almacena la referencia al elemento HTML que muestra un mensaje de error si el monto total ingresado es negativo o vacío.

const productTitleError = document.getElementById("product-title");//Almacena la referencia al elemento HTML que muestra un mensaje de error si el título del producto está vacío.

const productCostError = document.getElementById("product-cost-error");//Almacena la referencia al elemento HTML que muestra un mensaje de error si el costo del producto está vacío.

//AQUÍ MENSAJES DE ERRROR//

const amount = document.getElementById("amount");//muestra el total del presupuesto 
const expenditureValue = document.getElementById("expenditure-value");//muestra el total de los gastos
const balanceValue = document.getElementById("balance-amount"); // Elemento que muestra el saldo restante después de los gastos

const list = document.getElementById("list"); // Elemento que representa la lista de gastos, dónde vamos añadiendo los gastos

let tempAmount = 0; // Variable temporal para almacenar el valor del monto total ingresado por el usuario



//1. EVENT LISTENER PARA INDICAR DEL PRESUPUESTO QUE DISPONEMOS

totalAmountButton.addEventListener("click", () => {
    // Guardar el valor del monto total ingresado por el usuario
    tempAmount = totalAmount.value;



   // Verificar si la cantidad está vacía o es negativa
  if (tempAmount === "" || tempAmount <= 0) { //Comprueba si tempAmount es una cadena vacía o si es menor o igual a cero o 0.
    errorMessage.classList.remove("hide"); // Mostrar mensaje de ERROR

  } else {
    errorMessage.classList.add("hide"); // Ocultar mensaje de ERROR
    
    // Actualizar el valor del presupuesto
    amount.innerHTML = tempAmount;
    
    // Actualizar el valor del saldo
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    
    // Limpiar el campo de entrada de la cantidad total
    totalAmount.value = "";
  }
});