function maxProfitProperties(timeUnit) {
  const earnings = new Array(timeUnit + 1).fill(0);
  const choices = new Array(timeUnit + 1).fill([0, 0, 0]); // Stores the number of properties developed for each type

  for (let t = 1; t <= timeUnit; t++) {
    // Building a Theatre
    if (t >= 5 && earnings[t - 5] + 1500 > earnings[t]) {
      earnings[t] = earnings[t - 5] + 1500;
      choices[t] = [
        choices[t - 5][0] + 1,
        choices[t - 5][1],
        choices[t - 5][2],
      ];
    }

    // Building a Pub
    if (t >= 4 && earnings[t - 4] + 1000 > earnings[t]) {
      earnings[t] = earnings[t - 4] + 1000;
      choices[t] = [
        choices[t - 4][0],
        choices[t - 4][1] + 1,
        choices[t - 4][2],
      ];
    }

    // Building a Commercial Park
    if (t >= 10 && earnings[t - 10] + 3000 > earnings[t]) {
      earnings[t] = earnings[t - 10] + 3000;
      choices[t] = [
        choices[t - 10][0],
        choices[t - 10][1],
        choices[t - 10][2] + 1,
      ];
    }
  }

  // Backtrack to get the optimal mix of properties
  const [theatres, pubs, commercialParks] = choices[timeUnit];

  return `T: ${theatres} P: ${pubs} C: ${commercialParks}`;
}

// Test cases
console.log("Test Case 1");
console.log("Time Unit: 7");
console.log("Earnings:", maxProfitProperties(7));
console.log();

console.log("Test Case 2");
console.log("Time Unit: 8");
console.log("Earnings:", maxProfitProperties(8));
console.log();

console.log("Test Case 3");
console.log("Time Unit: 13");
console.log("Earnings:", maxProfitProperties(13));
