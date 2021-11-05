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
        id:dummyTransactions[dummyTransactions.length-1].id +1, 
        name: transactionName,
        amount: Number (transactionAmount)
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
    li.innerHTML=`
    ${transaction.id} ${transaction.name} 
    <span> ${transaction.amount}</span> <button onClick="removeTransaction(${transaction.id})">x</button>`;
    transactionUl.append(li); // append add no final da lista
}

const updateBalanceValues = () => {
    //o map faz um array pegando uma propriedade(amount) de cada objeto 
    const transactionsAmount = dummyTransactions.map(({amount})=> amount);
    console.log(transactionsAmount);
    const total = transactionsAmount.reduce((acc, transaction) =>
    acc + transaction, 0);
    console.log('total: ' + total);

    const income = transactionsAmount.filter(value => value>0)
                    .reduce((acc, value)=> acc+value, 0);
    console.log('receitas: ' + income);

    const expense = transactionsAmount.filter(value => value<0)
                    .reduce((acc, value)=> acc+value, 0);
    console.log('despesas: '+ expense);

    //insere os valoes no html
    document.getElementById('balance').textContent = `${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    document.getElementById('money-plus').textContent = `${income.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    document.getElementById('money-minus').textContent = `${expense.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    //se usar querySelector, tem q botar # pra id, e . pra classe
}

const removeTransaction = codigo => {
    dummyTransactions= dummyTransactions.filter(transaction => transaction.id!==codigo);
    console.log(dummyTransactions);
    init();
}


const init = () => {
    transactionUl.innerHTML= ''; //gambiarra para não relistar os itens já printados
    dummyTransactions.forEach(addTransactionIntoDOM);
    updateBalanceValues();
}
init ();