var args = process.argv.slice(2);

if(isNaN(parseInt(args.toString()))){
  console.log("un chiffre on a dit")
}else{
  if(parseInt(args.toString())%2 == 0){
    console.log('pair !')
  }else{
    console.log('impair')
  }
}

