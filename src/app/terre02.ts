var args = process.argv.slice(2);
  console.log(args.toString().split(',').join(' \n'));
console.log('--------------------------------------');
process.argv.forEach(function (val) {
  console.log(val);
});

