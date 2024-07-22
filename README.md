# Budget App

This is a web-based budget management application that allows users to set a total budget, add expenses, edit and delete expenses, and view the updated balance in real-time.

## Features

- Set a total budget.
- Add expenses with a title and cost.
- View a summary of the total budget, expenses, and balance.
- Edit existing expenses.
- Delete expenses from the list.
- View the updated balance after each transaction.

## Code Structure

The JavaScript code is organized as follows:

1. **DOM Element Selection and Variable Assignment:** 
   - DOM elements are selected using methods like `document.getElementById()` and assigned to variables for later use in the script.

2. **Event Listeners:** 
   - Event listeners are added to relevant buttons to detect user actions, such as setting the total budget or adding expenses. When an event is triggered, an associated function is called to handle the corresponding action.

3. **Functions:** 
   - Several functions are defined to modularize the logic and promote code reuse. These functions include input validation, creation of new items in the expense list, modification and deletion of existing items, and updating the balance and total expenses.

4. **DOM Manipulation:** 
   - The JavaScript code dynamically manipulates the Document Object Model (DOM) to update the user interface in response to user actions. Elements are added, modified, and removed from the webpage as needed to reflect the current state of the budget.

## Running the Project

To run the project, simply open the HTML file in a web browser that supports JavaScript. You can then interact with the application as follows:

1. **Set a Total Budget:**
   - Enter a value in the corresponding field and click the "Set Budget" button.
   
2. **Add Expenses:**
   - Enter a title and cost in the respective fields and click the "Check Amount" button.

3. **Edit an Existing Expense:**
   - Click the edit icon (pencil) next to the list item.

4. **Delete an Expense:**
   - Click the delete icon (trash can) next to the list item.

The balance and total expenses are automatically updated after each transaction, and error messages are displayed if incorrect or incomplete data is entered.

Enjoy using the budget app and keep better control of your finances!
