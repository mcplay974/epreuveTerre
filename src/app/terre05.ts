var args = process.argv.slice(2);

if(Math.floor(parseInt(args[0].toString()) / parseInt(args[1].toString())) < 0){
  console.log("resultat : " +  Math.floor(parseInt(args[0].toString()) / parseInt(args[1].toString())));
  console.log("reste : " + parseInt(args[0].toString()) % parseInt(args[1].toString()));
}else{
  console.log("erreur");
}

