let delay = 100;
let arr = ['|', '/','-','\\','|','/','-','\\','|']
for (let val of arr) {
  setTimeout(() => process.stdout.write(`\r${val}`), delay);
  delay += 200
};

setTimeout(() => process.stdout.write(`\n`), delay)
