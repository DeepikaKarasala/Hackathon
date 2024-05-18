
let expenses = [];
// to display the expences
function renderExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            ${expense.description} - $${expense.amount}
            <button class="btn btn-danger btn-sm float-right" onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
    });
}
//to add the expences
function addExpense(description, amount) {
    const expense = {
        description,
        amount
    };
    expenses.push(expense);
    renderExpenses();
}
//to delete the items
function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}
//to enter and submit the expences to the list
document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description && amount) {
        addExpense(description, amount);
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter both category and amount.');
    }
});
