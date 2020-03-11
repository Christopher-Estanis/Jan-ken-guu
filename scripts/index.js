function bostinha(skilzinha) {
    const xd = Number(skilzinha.id);
    // const mudarDps = characterVerification();
    roundVerification();
    
    
    attackTime(xd);

    drawLife(mainCharacter, 1);
    drawLife(randomEnemy, 2);
    
    console.log('Personagem: ', mainCharacter.getCharacterInfo() + '\n');
    console.log('Enemy: ', randomEnemy.getCharacterInfo());   
}

function characterVerification() {
    // verifCharges(mainCharacter, attack);
}

function attackTime(skill) {
    const enemySkill = randomizeAttack(randomEnemy);
    mainCharacter.attack(randomEnemy,skill,enemySkill);
}

function randomizeAttack(enemy) {
    const random = Math.floor(Math.random() * 4);
    const verif = verifCharges(enemy, random);
    return verif ? randomizeAttack(enemy) : random;
}

function verifCharges(character, skill) {
    const verif = character.AttackList[skill].numCharges === 0 ? true : false; 
    if(verif) {
        character.AttackList[skill].roundCount += 1;
    };
    return verif;
}

function roundVerification() {
    roundCharges(mainCharacter);
    roundCharges(randomEnemy);
}

function roundCharges(char) {
    for (let i = 0 ; i <= 3 ; i++) {
        if(char.AttackList[i].roundCount == 2) {
            char.AttackList[i].roundCount = 0;
            char.AttackList[i].numCharges = 3;
        }
    }
}