const playerListArray = [];
const addToFavoriteList =(element)=>{
  const playerName = element.parentNode.parentNode.children[0].innerText;
  playerListArray.push(playerName);
  if(playerListArray.length<3){
    const playerListEl = document.getElementById('player-list');
    const totalSelectedPlayerEl = document.getElementById('total-selected-player');
    const playerNameEl = document.createElement('tr');
    totalSelectedPlayerEl.innerText = playerListArray.length;
    playerNameEl.innerHTML=`
    <th><span>${playerListArray.length}</span>.</th>
      <td>${playerName}</td>
    `;
    playerListEl.appendChild(playerNameEl);
    element.setAttribute('disabled', '');  
  }else{
    alert('Warning! You already select 5 players!')
  }
  

}

const getTotalPlayersNumber=()=>{
    return playerListArray.length;
}