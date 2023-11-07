const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// 1. No deja mutar el array
//numbers.push(9);
//numbers.pop();
//numbers.unshift(1);

// 2. Solo se pueden usar métodos que no muten el array
numbers.filter(() => {});
numbers.map(() => {});
