var args = process.argv.slice(2);

if(args.length > 1 || !isNaN(Number(args[0].toString()))){
  console.log("erreur")
}else{
  console.log(args[0].toString().length)
}

