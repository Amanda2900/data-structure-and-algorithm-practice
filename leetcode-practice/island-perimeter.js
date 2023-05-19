// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// Input: grid = [[1]]
// Output: 4

// Example 3:
// Input: grid = [[1,0]]
// Output: 4

// Constraints:

//     row == grid.length
//     col == grid[i].length
//     1 <= row, col <= 100
//     grid[i][j] is 0 or 1.
//     There is exactly one island in grid.

var islandPerimeter = function(grid) {
  let sides = 4;
  let perimeterCount = 0;

  for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[i].length; j++){
        // Check if land
        if (grid[i][j] === 1){

        // Check above spot if not in top row
        if (i > 0){
            if (grid[i-1][j] === 1){
                sides -= 1;
            }
        }

        // Check below spot if not in bottom row
        if (i < grid.length - 1) {
            if (grid[i+1][j] === 1){
                sides -= 1;
            }
        }

        // Check left if not on left edge of grid
        if (j > 0){
            if (grid[i][j-1] === 1){
                sides -= 1;
            }
        }

        // Check right if not on right edge of grid
        if (j < grid[i].length - 1) {
            if (grid[i][j+1] === 1){
                sides -= 1;
            }
        }

        perimeterCount += sides;
        sides = 4;
        }
      }
  }
  return perimeterCount;
};