var args = process.argv.slice(2);
const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let result ='';

for (let i =0; i < alph.length; i++){
  if(args.toString() === alph[i]){
    for(i; i < alph.length ; i++){
      result += alph[i];
    }
    console.log(result);
  }
}
