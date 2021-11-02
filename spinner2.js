let delay = 100;
let arr = ['|', '/','-','\\','|','/','-','\\','|']
for (let i in arr) {
  if ( Number(i) === arr.length - 1 ) {
    setTimeout(() => process.stdout.write(`\r${arr[i]} \n`), delay);
  } else {
    setTimeout(() => process.stdout.write(`\r${arr[i]}`), delay);
  }
  delay += 200
}


