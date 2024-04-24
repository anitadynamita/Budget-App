// Seleccionar elementos del DOM y asignar variables
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

let tempAmount = 0;

// EVENT LISTENER PARA INDICAR DEL PRESUPUESTO QUE DISPONEMOS
totalAmountButton.addEventListener("click", () => {
    tempAmount = totalAmount.value;

    if (tempAmount === "" || tempAmount <= 0) {
        errorMessage.classList.remove("hide"); // Muestra el mensaje de error
    } else {
        errorMessage.classList.add("hide"); // Oculta el mensaje de error
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

    console.log("Buttons disabled:", bool);
};

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

    console.log("Element modified:", parentDiv);
};

// Función para Crear Lista
const listCreator = (expenseName, expenseValue) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex", "justify-between", "items-center");
  list.appendChild(sublistContent);

  let productTitle = document.createElement("p");
  productTitle.classList.add("product");
  productTitle.textContent = expenseName;

  let amount = document.createElement("p");
  amount.classList.add("amount");
  amount.textContent = expenseValue;

  let iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  let editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-edit", "edit");
  editIcon.addEventListener("click", () => {
      modifyElement(editIcon, true);
  });

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash-alt", "delete");
  deleteIcon.addEventListener("click", () => {
      modifyElement(deleteIcon);
  });

  sublistContent.appendChild(productTitle);
  sublistContent.appendChild(amount);
  iconContainer.appendChild(editIcon);
  iconContainer.appendChild(deleteIcon);
  sublistContent.appendChild(iconContainer);

  console.log("Element added to list:", sublistContent);
};


// Función para Agregar Gastos
checkAmountButton.addEventListener("click", () => {
    // Ocultar todos los mensajes de error al inicio
    productTitleError.classList.add("hide");
    productCostError.classList.add("hide");

    if (!userAmount.value || !productTitle.value) {
        if (!userAmount.value) {
            productCostError.classList.remove("hide"); // Muestra el mensaje de error de costo
        }
        if (!productTitle.value) {
            productTitleError.classList.remove("hide"); // Muestra el mensaje de error de título
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

    console.log("Expense added successfully.");
});
