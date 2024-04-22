//seleciono los elementos del DOM y asigno variables

let totalAmount = document.getElementById("total-amount");// aqui entro la cantidad total de presupuesto
let userAmount = document.getElementById("user-amount"); // aqui entrada de lo que cuesta el producto: alquiler, comida, gas, luz...
const checkAmountButton = document.getElementById("check-amount");//boton que añade los gastos de las expenses

const totalAmountButton = document.getElementById("total-amount-button");//boton que añade el presupuesto total que le indicamos

const productTitle = document.getElementById("product title");//input del nombre del producto que añadimos

const productTitleError = document.getElementById("product-title");//Mensaje de error para el título del producto

const productCostError = document.getElementById("product-cost-error");//Mensaje de error para el costo del producto

const amount = document.getElementById("amount");//muestra el total del presupuesto 
const expenditureValue = document.getElementById("expenditure-value");//muestra el total de los gastos
const balanceValue = document.getElementById("balance-amount"); // Elemento que muestra el saldo restante después de los gastos

const list = document.getElementById("list"); // Elemento que representa la lista de gastos, dónde vamos añadiendo los gastos

let tempAmount = 0; // Variable temporal para almacenar el valor del monto total ingresado por el usuario




