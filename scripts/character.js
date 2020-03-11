const quickAttack = 0, defense = 1 ,strongAttack = 2, dodge = 3;

class character{
  constructor(name){
      this.characterName = name;
      this.health = 100;
      this.isStunned = false;
      this.AttackList = 
      [
          {
              name: 'quickAttack',
              damage: 10,
              numCharges: 3,
              roundCount: 0
          },
          {
              name: 'defense',
              damage: 0,
              numCharges: 3,
              roundCount: 0
          },
          {
              name: 'strongAttack',
              damage: 10,
              numCharges: 3,
              roundCount: 0
          },
          {
              name: 'dodge',
              damage: 0,
              numCharges: 3,
              roundCount: 0
          }
      ];
  }
  
  //Target é um objeto da mesma classe "Character", attackType e CounterAttack são cosntantes pré definidas no inicio do código
  attack(target,attackType,counterAttack){        
      switch (attackType) {   
          case quickAttack:
              switch (counterAttack) {
                  case strongAttack:
                      target.takeDamage(attackType);
                      target.isStunned = true;
                      break;
                  case defense: 
                      this.isStunned = true;
                      break;
                  case dodge:
                      //Empata  
                  break;
                  default:            
                      target.takeDamage(attackType);
                      this.takeDamage(attackType);
                      break;
              }       
              
          break;
          case defense:
              switch (counterAttack) {
                  case quickAttack:
                      target.isStunned = true;
                      break;
                  case strongAttack:
                      this.takeDamage(counterAttack);
                      this.isStunned = true;
                      break;
                  case dodge:
                      //empata
                  break;
                  default:
                  break;
              }

          break;

          case strongAttack:
              switch (counterAttack) {
                  case defense:
                      target.takeDamage(attackType);
                      target.isStunned = true;
                      break;
                  case quickAttack:
                      this.takeDamage(counterAttack);
                      break;
                  case dodge:
                      this.isStunned = true;
                      break;
                  default:
                      target.takeDamage(attackType);    
                      this.takeDamage(attackType);
                      break;
              }
            break;
          case dodge:
              switch (counterAttack) {
                  case quickAttack:
                      //empata
                  break;
                  case defense:
                      //empata
                  case strongAttack:
                      target.isStunned = true;
                      break;
                  default:

                  break;
              }    


          break;
          default:
              //Que se tá fazendo, mano    
          break;


      }
      this.AttackList[attackType].numCharges -= 1;
      target.AttackList[counterAttack].numCharges -= 1;
  }

  getCharacterInfo(){
      return(JSON.stringify(this));
  }

  takeDamage(attackName){
      this.health -= this.AttackList[attackName].damage;     
      return this.getCharacterInfo();
  }
  
}

