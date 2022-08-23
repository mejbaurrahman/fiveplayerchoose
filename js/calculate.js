const calculatePlayerCost=()=>{
    const playerCostEl = document.getElementById('per-player-cost');
    const playerCost = playerCostEl.value;
    const playerCostToNumber = parseInt(playerCost);
    if(playerCostToNumber<0){
        alert('Please Enter a positive Number.');
    }else if(playerCost==''){
        alert('Enter the Per Player Cost');
    }else{

        const totalNumberOfPlayer =getTotalPlayersNumber();
        const playerExpenses= calculatePlayerExpenses(totalNumberOfPlayer, playerCostToNumber);
        const playerExpensesEl = document.getElementById('player-expenses');
        playerExpensesEl.innerText = playerExpenses;
    }
    
}

const calculatePlayerExpenses=(totalNumberOfPlayer, playerCostPerPlayer)=>{
     const totalCostForPlayers = totalNumberOfPlayer*playerCostPerPlayer;
     return totalCostForPlayers; 
}