/*array for tracking player list and size of the list*/
const playerListArray = [];

//add played to the player list
const addToFavoriteList =(element)=>{
  const playerName = element.parentNode.parentNode.children[0].innerText;
  
  if(playerListArray.length<5){
    const playerListEl = document.getElementById('player-list');
    const playerNameEl = document.createElement('tr');
    playerNameEl.innerHTML=`
    <th><span>${playerListArray.length+1}</span>.</th>
      <td>${playerName}</td>
    `;
    playerListEl.appendChild(playerNameEl);
    element.setAttribute('disabled', '');  
    playerListArray.push(playerName);
    
  }else{
    alert('Warning! You have already selected 5 players!')
  }
  

}

const getTotalPlayersNumber=()=>{
    return playerListArray.length;
}