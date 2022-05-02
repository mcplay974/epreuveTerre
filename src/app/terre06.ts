var args = process.argv.slice(2);

let reversed = args[0].split('').reverse().join('');
console.log(reversed);
