const calculatePlayerBudget=()=>{
    const playerBudgetEl = document.getElementById('per-player-cost');
    const playerBudget = playerBudgetEl.value;
    const playerBudgetToNumber = parseFloat(playerBudget);
    const totalNumberOfPlayer =getTotalPlayersNumber();
    if(playerBudgetToNumber<0){
        alert('Please Enter a positive Number.');
    }else if(playerBudget==''){
        alert('Enter the Per Player Budget');
    }else{
        const playerExpenses= calculatePlayerExpenses(totalNumberOfPlayer, playerBudgetToNumber);
        const playerExpensesEl = document.getElementById('player-expenses');
        playerExpensesEl.innerText = playerExpenses;
        
    }
    
}
const calculateTotalBudget=()=>{
    const managerBudgetEl = document.getElementById('manager-budget');
    const coachBudgetEl = document.getElementById('coach-budget');
    const playerExpensesEl = document.getElementById('player-expenses');
    const playerExpenses = playerExpensesEl.innerText;
    const managerBudget = managerBudgetEl.value;
    const coachBudget = coachBudgetEl.value;

    if(parseFloat(managerBudget)<0){
        alert('Enter a positive Number for Manager Budget');
    }else if(parseFloat(coachBudget)<0){
        alert('Enter a positive Number for Coach Budget');
    }else{
        const totalBudget = totalBugetCalculate(playerExpenses, managerBudget, coachBudget);
        const totalBudgetEl = document.getElementById('total-budget');
        totalBudgetEl.innerText= totalBudget;
    }
    


}
const calculatePlayerExpenses=(totalNumberOfPlayer, playerBudgetPerPlayer)=>{
     const totalBudgetForPlayers = totalNumberOfPlayer*playerBudgetPerPlayer;
     return totalBudgetForPlayers; 
}

const totalBugetCalculate=(playerExpenses, managerBudget, coachBudget)=>{
    const playerExpensesToNumber = parseFloat(playerExpenses);
    const managerBudgetToNumber = parseFloat(managerBudget);
    const coachBudgetToNumber = parseFloat(coachBudget);

   const totalBudget = playerExpensesToNumber+managerBudgetToNumber+coachBudgetToNumber;
    return totalBudget;
   
}