let mainCharacter = new character('Kassandra');
let randomEnemy = new character('Roberto');

window.onload = function() {
  drawName(mainCharacter, 1);
  drawName(randomEnemy, 2);
  drawLife(mainCharacter, 1);
  drawLife(randomEnemy, 2);
  drawCharges(mainCharacter);
}

function drawName(name, player) {

    document.getElementById(`p${player}-name`).innerHTML = name.characterName;
}   

function drawLife(name, player) {
    const lifeCharacter = name.health;
    document.getElementById(`p${player}-life`).style.width = `${lifeCharacter}%`;
}

function drawCharges(name) {
  for(let i = 0 ; i <= 3 ; i++) {
    const numCharges = name.AttackList[i].numCharges;
    const nameAtack = name.AttackList[i].name;
    for(let i = 1 ; i <= numCharges ; i++) {
      document.getElementById(`${nameAtack}-charges${i}`).style.backgroundColor = "#fff";
    }
  }
}