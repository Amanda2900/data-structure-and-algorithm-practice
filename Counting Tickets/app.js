// You will be provided with an array of positive and negative integers representing a record of the comingss and goings of groups inside the park for the day 
// Each integer represents the party size of a group either entering (positive) or exiting (negative) the park. Groups never split up or combine, and a valid record will never show a group leaving the park before they enter. 
// In order to close the park for the day, you need the park to be empty. Write a function that returns 'CLOSE' if the park can safely close or 'OPEN' if there are still people in the park or the record is invalid.
// Group sizes are not unique. There can be multiple parties of the same sie in the park.

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
