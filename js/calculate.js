const calculatePlayerCost=()=>{
    const playerCostEl = document.getElementById('per-player-cost');
    const playerCost = playerCostEl.value;
    const playerCostToNumber = parseInt(playerCost);
    const totalNumberOfPlayer =getTotalPlayersNumber();
    console.log(totalNumberOfPlayer);
    if(playerCostToNumber<0){
        alert('Please Enter a positive Number.');
    }else if(playerCost==''){
        alert('Enter the Per Player Cost');
    }else if(totalNumberOfPlayer<1){
        alert('Please Add player first');
    }else{
        const playerExpenses= calculatePlayerExpenses(totalNumberOfPlayer, playerCostToNumber);
        const playerExpensesEl = document.getElementById('player-expenses');
        playerExpensesEl.innerText = playerExpenses;
        
    }
    
}
const calculateTotalCost=()=>{

}
const calculatePlayerExpenses=(totalNumberOfPlayer, playerCostPerPlayer)=>{
     const totalCostForPlayers = totalNumberOfPlayer*playerCostPerPlayer;
     return totalCostForPlayers; 
}