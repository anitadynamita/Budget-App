// Selección de elementos del DOM y asignación de variables
let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");

// Mensajes de error
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");

const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");

let tempAmount = 0; // Variable temporal para almacenar el presupuesto total

// Event Listener para establecer el presupuesto total
totalAmountButton.addEventListener("click", () => {
  tempAmount = totalAmount.value;

  // Verificar si el presupuesto es válido
  if (tempAmount === "" || tempAmount <= 0) {
    errorMessage.classList.remove("hide"); // Mostrar mensaje de error
  } else {
    errorMessage.classList.add("hide"); // Ocultar mensaje de error
    amount.innerHTML = tempAmount;
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    totalAmount.value = "";
  }
});

// Función para deshabilitar/habilitar botones de editar y borrar (NO tenía ni idea)
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};


// OJO NI IDEA 
// En el contexto de la función `disableButtons`, el parámetro `bool` es un valor booleano que determina si se deben deshabilitar o habilitar los botones de editar y borrar.

// Cuando `bool` es `true`, la función deshabilita los botones estableciendo su propiedad `disabled` en `true`, lo que significa que los botones no responderán a los eventos del usuario y aparecerán visualmente desactivados.

// Cuando `bool` es `false`, la función habilita los botones estableciendo su propiedad `disabled` en `false`, lo que permite que los botones respondan a los eventos del usuario y aparezcan visualmente activados. 

// En resumen, este parámetro booleano controla si los botones deben estar habilitados o deshabilitados según la necesidad del flujo de la aplicación.



// Función para Modificar Elementos de la Lista
const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement.parentElement;
  let currentBalance = balanceValue.innerText;
  let currentExpense = expenditureValue.innerText;
  let parentAmount = parentDiv.querySelector(".amount").innerText;

  if (edit) {
    let parentText = parentDiv.querySelector(".product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmount;
    disableButtons(true);
  }

  balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
  expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);
  parentDiv.remove();
};

// Función para Crear Lista
const listCreator = (expenseName, expenseValue) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex", "justify-between", "items-center");
  list.appendChild(sublistContent);

  // Crear elementos para el título y el monto del gasto
  let productTitle = document.createElement("p");
  productTitle.classList.add("product");
  productTitle.textContent = expenseName;

  let amount = document.createElement("p");
  amount.classList.add("amount");
  amount.textContent = expenseValue;

  // Crear contenedor para iconos de editar y borrar
  let iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  // Crear icono de editar
  let editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-edit", "edit");
  editIcon.addEventListener("click", () => {
    modifyElement(editIcon, true);
  });

  // Crear icono de borrar
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash-alt", "delete");
  deleteIcon.addEventListener("click", () => {
    modifyElement(deleteIcon);
  });

  // Agregar elementos a la lista
  sublistContent.appendChild(productTitle);
  sublistContent.appendChild(amount);
  iconContainer.appendChild(editIcon);
  iconContainer.appendChild(deleteIcon);
  sublistContent.appendChild(iconContainer);
};

// Función para Agregar Gastos
checkAmountButton.addEventListener("click", () => {
  // Ocultar mensajes de error
  productTitleError.classList.add("hide");
  productCostError.classList.add("hide");

  // Verificar si los campos de título y monto están completos
  if (!userAmount.value || !productTitle.value) {
    if (!userAmount.value) {
      productCostError.classList.remove("hide"); // Mostrar mensaje de error de monto
    }
    if (!productTitle.value) {
      productTitleError.classList.remove("hide"); // Mostrar mensaje de error de título
    }
    return false;
  }


// Habilitar botones de edición
disableButtons(false);

    // Obtener el monto del nuevo gasto
    let expenditure = parseInt(userAmount.value);

    // Actualizar el total de gastos
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;

    // Calcular y actualizar el balance total
    const totalBalance = tempAmount - sum;
    balanceValue.innerText = totalBalance;

    // Agregar el nuevo gasto a la lista y limpiar los campos de entrada
    listCreator(productTitle.value, userAmount.value);
    productTitle.value = "";
    userAmount.value = "";

});