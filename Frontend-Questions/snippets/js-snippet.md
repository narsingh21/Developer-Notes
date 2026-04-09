console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve()
  .then(() => {
    console.log('3');
    return Promise.resolve('4');
  })
  .then((res) => console.log(res));

Promise.resolve().then(() => console.log('5'));

console.log('6');

//1 6 3 5 4 2


