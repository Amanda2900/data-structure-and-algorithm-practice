function findBalance(intArray) {

  const findTotal = array => array.reduce((accumulator, i) => accumulator + i, 0);

  const total = findTotal(intArray);
  let currLeft = 0;
  let currRight = total;
  const differences = new Map();

  for (let i = 1; i <= intArray.length; i++) {
    
    currLeft += intArray[i - 1];
    currRight -= currLeft;

    let currTotal = Math.abs(currLeft - currRight);

    if (currTotal === 0) return i;

    differences.set(currTotal, i);
    currRight = total;
  }

  return differences.get(Math.min(...differences.keys()));

}

console.log(findBalance([1,2,3,4])); // 3
console.log(findBalance([0,0,2,99,99])); // 4
console.log(findBalance([99,0,0,0,99])); // 1 because 1, 2, 3, 4 are all equal so we return the smallest
