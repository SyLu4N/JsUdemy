export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const ob1 = { chave1: 'valor 1' };
const ob2 = { chave2: 'valor 2' };
const uniao = unirObjetos(ob1, ob2);
console.log(uniao);
