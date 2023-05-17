function getParkStatus(record) {
  let mapOfVisitors = new Map();
  let parkVisitors = 0;

  for (let i = 0; i < record.length; i++) {
    if (record[i] > 0) {
      if (mapOfVisitors.has(record[i])) mapOfVisitors.set(record[i], mapOfVisitors.get(record[i])+1);
      else mapOfVisitors.set(record[i], 1);
    }
    if (record[i] < 0) {
      let posNum = Math.abs(record[i]);

      if (!mapOfVisitors.has(posNum)) return 'OPEN'; //INVALID
      if (mapOfVisitors.get(posNum) === 0) return 'OPEN'; //INVALID
      mapOfVisitors.set(posNum, mapOfVisitors.get(posNum)-1);
    }

    parkVisitors += record[i];
  };

  if (parkVisitors === 0) return 'CLOSE';
  return 'OPEN';

}

console.log(getParkStatus([3,4,-3,-4])); // CLOSE
console.log(getParkStatus([7,1,-7,2])); // OPEN
console.log(getParkStatus([7,1,-7,2,-1,-2,-2,2])); // OPEN because INVALID
