// You are reorganizing your schedule and a way to simplify it is by reorganizing it so that your meetings with a single person throught the day are combined into one meeting. You have separated your day into several equal sized chunks.
// Your coworkers have provided their availability and you notice that some were not available at the original meeting time.
// To prevent confusion, you would also like to preserve the order that you see people for the first time throughout the day, if possible. 
// Your function will be given an array of names representing your current schedule broken up into equal chunks of time. You will also be provided an array of arrays, each subarray containing a name in the original calendar, that person's starting availability(inclusive), and their ending availability(exclusive). Availabilities are meant to be human readable and start at 1.

function optimizeSchedule(originalSchedule, availabilities) {
  const orderHash = new Map();
  const personHash = {};

  //populate orderHash and personHash based on orginalSchedule
  for (let i = 0; i < originalSchedule.length; i++) {
    let name = originalSchedule[i];

    if (!personHash[name]){
      personHash[name] = {count: 1, start: null, end: null, origOrder: personHash.size + 1};
      orderHash.set(orderHash.size + 1, name);
    } else {
      personHash[name].count++;
    }
  }

  // add start and end times from availabilities to personHash
  for (let i = 0; i < availabilities.length; i++) {
    for (let j = 0; j < availabilities[i].length; j++) {
      let name = availabilities[i][0];
      personHash[name].start = availabilities[i][1];
      personHash[name].end = availabilities[i][2];
    }
  }

  let currOrder = 1;
  let nextToFill = 0;
  let finalOrder = new Array(originalSchedule.length);

  while (nextToFill < originalSchedule.length) {
    let name = orderHash.get(currOrder);

    if (name === null) currOrder++;
    else if (name === undefined) currOrder = 1;
    else {
      let { count, start, end } = personHash[name];
      let timeSlot = nextToFill + 1;

      if (timeSlot >= start && timeSlot+count <= end) {
        finalOrder.fill(name, nextToFill, nextToFill + count);
        orderHash.set(currOrder, null);
        currOrder = 1;
        nextToFill += count;

      } else currOrder++;
    }
  }
  
  return finalOrder;
}

console.log(optimizeSchedule(['John', 'Mary', 'John', 'Peter', 'Susan', 'Peter'], [['John',2,4], ['Mary',1,5], ['Peter',5,7], ['Susan',3,7]]));

// Answer: ['Mary, 'John', 'John', 'Susan', 'Peter', 'Peter']