var args = process.argv.slice(2);

const numberOne = parseInt(args[0]);
const numberTwo = parseInt(args[1]);
const numberThree = parseInt(args[2]);

let temporaire;

if(numberOne == numberTwo && numberThree == numberTwo && numberOne == numberThree){
  console.log("erreur");
}else{
if(numberTwo > numberThree){
  console.log("heeinn")
}

  if((numberTwo > numberOne && numberTwo < numberThree) || (numberOne > numberTwo && numberTwo > numberThree)){
    temporaire = numberTwo;
  }

  if((numberThree < numberTwo && numberThree > numberOne) || (numberOne > numberThree && numberTwo < numberThree)){
    temporaire = numberThree;
  }

  if((numberOne > numberTwo && numberThree > numberOne) || (numberOne < numberTwo && numberOne > numberThree)){
    temporaire = numberOne;
  }

  console.log(temporaire);
}


