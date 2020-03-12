let gambiarra;
function comeca(skilzinha) {
    const hability = Number(skilzinha.id);
    // const mudarDps = characterVerification();
    // roundVerification();
    
    
    attackTime(hability);
    drawLife(mainCharacter, 1);
    drawLife(randomEnemy, 2);
    drawHability(mainCharacter, hability);
    drawHability(randomEnemy, gambiarra);
    drawCharges(mainCharacter)
}

function attackTime(skill) {
    const enemySkill = randomizeAttack();
    gambiarra = enemySkill;
    mainCharacter.attack(randomEnemy,skill,enemySkill);
}

function randomizeAttack() {
    const random = Math.floor(Math.random() * 4);
    // const verif = verifCharges(enemy, random);
    // return verif ? randomizeAttack(enemy) : random;
    return random;
}

function verifCharges(character, skill) {
    const verif = character.AttackList[skill].numCharges === 0 ? true : false;
    return verif;
}

function roundVerification() {
    const charges = verifCharges(mainCharacter);
    const life = verifLife();
    return charges && life;
}

function roundCharges(char) {
    for (let i = 0 ; i <= 3 ; i++) {
        if(char.AttackList[i].roundCount == 3) {    
            char.AttackList[i].numCharges = 0;
            char.AttackList[i].numCharges = 3;
        }
    }
}


function drawHability(char, hability) {
    console.log(`${char.characterName}: ${char.AttackList[hability].name}`);
}