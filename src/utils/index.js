export const PrintPlayerInMap = (player, map) => {
  var newMap = map.map(arr => arr.slice());
  for (let y = 0; y < player.tetromino.tetromino.length; y++)
    for (let x = 0; x < player.tetromino.tetromino.length; x++)
      if (player.tetromino.tetromino[y][x] === 1) {
        const pixelY = player.pos[0] + y;
        const pixelX = player.pos[1] + x;
        newMap[pixelY][pixelX] = { fill: 1, color: player.tetromino.color };
      }
  return newMap;
};

//This does exactly what it says and prints the player's moves to the map/grid  