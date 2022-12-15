const args = process.argv.splice(2);
console.log('Your input: ' + args);

for (let x = 0; x < args.length; x++) { // skip no input
  let newArgs = args.sort();
  if (!Number.isNaN(+newArgs[x]) && (+newArgs[x] > 0)) { // skip ignore negative and not a number
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(+newArgs[x]);
    }, Number(newArgs[x]) * 1000);
  }
}
