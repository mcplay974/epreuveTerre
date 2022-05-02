var args = process.argv.slice(2);

console.log("resultat : " +  Math.floor(parseInt(args[0].toString()) ** parseInt(args[1].toString())));
console.log("resultat : " +  Math.pow(parseInt(args[0].toString()), parseInt(args[1].toString())));
