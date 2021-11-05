const transactionUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

let dummyTransactions = [
    {id: 1, name: 'Bolo de Brigadeiro', amount: -20},
    {id: 2, name: 'Bolo de cenoura', amount: -30},
    {id: 3, name: 'Salário', amount: 500},
    {id: 4, name: 'Violão', amount: 120}
]
const addTransactionInArray = (transactionName, transactionAmount) =>{
    dummyTransactions.push({
        id:12, //id fixa. alterar depois
        name: transactionName,
        amount: transactionAmount
    })
}
const handleFormSubmit = event => {
    event.preventDefault(); // evita que a página seja recarregada qdo dá o submit.
    if(inputTransactionName.value.trim() === '' || 
    inputTransactionAmount.value.trim() === '' ){
        alert('Informe a descrição e o valore da transação');
        return;
    }
    addTransactionInArray(inputTransactionName.value, inputTransactionAmount.value);
    init();
}

form.addEventListener('submit', handleFormSubmit);

const addTransactionIntoDOM = transaction => {
    const li = document.createElement('li');
    li.innerHTML=`${transaction.name} ${transaction.amount}`;
    transactionUl.append(li); // append add no final da lista
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM);
}
init ();