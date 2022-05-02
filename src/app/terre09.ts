var args = process.argv.slice(2);
let premier = parseInt(args[0]);

function nbrPremier({toto}: { toto: any }) {
  for(var i = 2; i < toto; i++)
    if(toto%i === 0)
      return console.log(premier + ' est un nombre premier');
  return console.log(premier + ' n est pas un nombre premier');
}
nbrPremier({toto: premier});

