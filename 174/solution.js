function calculateMinimumHP(dungeon) {
  const rows = dungeon.length;
  const cols = dungeon[0].length;

  const minHealthGrid = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(Infinity));

  minHealthGrid[rows][cols - 1] = 1;
  minHealthGrid[rows - 1][cols] = 1;

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      const minHealthNeeded = Math.min(minHealthGrid[row + 1][col], minHealthGrid[row][col + 1]);
      minHealthGrid[row][col] = Math.max(1, minHealthNeeded - dungeon[row][col]);
    }
  }

  return minHealthGrid[0][0];
}