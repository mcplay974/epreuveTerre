var args = process.argv.slice(2);
let tri = "";
let temp = 0;
let temp2 = 0;


for(let i = 0; i < args.length; i++){
  temp2 = temp;
  temp = parseInt(args[i]);

  if(!isNaN(temp)){
    if(temp2 < temp){
      tri = "triée !";
    }else{
      tri = "pas triée ";
      break;
    }
  }
}

console.log(tri)
