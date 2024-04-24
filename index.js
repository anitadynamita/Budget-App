// Seleccionar elementos del DOM y asignar variables
let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title"); // Corregido el ID

// Mensajes de error
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error"); // Corregido el ID
const productCostError = document.getElementById("product-cost-error"); // Agregado

const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");

let tempAmount = 0;

// EVENT LISTENER PARA INDICAR DEL PRESUPUESTO QUE DISPONEMOS
totalAmountButton.addEventListener("click", () => {
  tempAmount = totalAmount.value;

  if (tempAmount === "" || tempAmount <= 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    amount.innerHTML = tempAmount;
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    totalAmount.value = "";
  }
});

// Función para deshabilitar o habilitar los botones de editar y borrar en la interfaz de usuario.
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};

// Función para Modificar Elementos de la Lista
const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement;
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
  sublistContent.classList.add("sublist-content", "flex-space");
  list.appendChild(sublistContent);

  sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;

  let editButton = document.createElement("button");
  editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
  editButton.style.fontSize = "1.2em";
  editButton.addEventListener("click", () => {
    modifyElement(editButton, true);
  });

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
  deleteButton.style.fontSize = "1.2em";
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });

  sublistContent.appendChild(editButton);
  sublistContent.appendChild(deleteButton);

  document.getElementById("list").appendChild(sublistContent);
};

// Función para Agregar Gastos
checkAmountButton.addEventListener("click", () => {
  if (!userAmount.value || !productTitle.value) {
    if (!userAmount.value) {
      productCostError.classList.remove("hide");
    } else {
      productCostError.classList.add("hide");
    }
    if (!productTitle.value) {
      productTitleError.classList.remove("hide");
    } else {
      productTitleError.classList.add("hide");
    }
    return false;
  }
  disableButtons(false);
  let expenditure = parseInt(userAmount.value);
  let sum = parseInt(expenditureValue.innerText) + expenditure;
  expenditureValue.innerText = sum;
  const totalBalance = tempAmount - sum;
  balanceValue.innerText = totalBalance;
  listCreator(productTitle.value, userAmount.value);
  productTitle.value = "";
  userAmount.value = "";
});