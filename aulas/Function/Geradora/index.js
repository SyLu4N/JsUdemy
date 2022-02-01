function* geradora1() {
  //código...
  yield 'valor 1';
  //código...
  yield 'valor 2';
  //código...
  yield 'valor 3';
}

const g1 = geradora1();
console.log(g1.next());

//done = termino 