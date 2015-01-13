var numRows
  , numCols
  , iterationNumber
  , currentStats;

function compileCurrentState() {
  var allStates = Array(numRows);

  for(x = 0; x < numCols; x++){
    var rowStates = Array(numCols)
    for(y = 0; y < numRows; y++){
      rowStates[y] = currentAlive(x + '_' + y);
    }
    allStates[x] = rowStates;
  }
  return allStates;
}

function compileCurrentNumbers() {
  var allNumbers = Array(numRows);

  for(x = 0; x < numCols; x++){
    var rowNumbers = Array(numCols)
    for(y = 0; y < numRows; y++){
      rowNumbers[y] = numberAliveNeighbors(x, y)
    }
    allNumbers[x] = rowNumbers;
  }
  return allNumbers;
}

function numberAliveNeighbors(x, y) {
  var neighborIds = neighbors(this.x, this.y);

  var numberAlive = 0
  for(n = 0; n < neighborIds.length; n++){
    if (currentAlive(neighborIds[n])){
      numberAlive++;
    }
  }
  return numberAlive;
}

function currentAlive(cellId) {
  var isAlive = $('#' + cellId).hasClass( "alive" );
  return isAlive;
}

function neighbors(x, y) {
  var coordinates = Array();

  coordinates.push([x - 1, y - 1]);
  coordinates.push([x    , y - 1]);
  coordinates.push([x + 1, y - 1]);

  coordinates.push([x - 1, y]);
  coordinates.push([x + 1, y]);

  coordinates.push([x - 1, y + 1]);
  coordinates.push([x    , y + 1]);
  coordinates.push([x + 1, y + 1]);

  if (true) {
    for(i = 0; i < coordinates.length; i++){
      coordinates[i] = sanitizeNeighbors(coordinates[i][0], coordinates[i][1]);
    }
  }

  var n = Array();

  for(i = 0; i < coordinates.length; i++){
    n.push(coordinates[i][0] + '_' + coordinates[i][1]);
  }

  return n;
}

function sanitizeNeighbors(x, y) {
  var new_x = x;
  var new_y = y;

  if(new_x < 0){
    new_x = numCols - 1;
    new_y--;
  }

  if(new_x > numCols - 1){
    new_x = 0;
    new_y++;
  }

  if(new_y < 0){
    new_y = numRows - 1;
    new_x--;
  }

  if(new_y > numRows - 1){
    new_y = 0;
    new_x++;
  }

  return [new_x, new_y];

}

function oneIteration() {
  iterationNumber++;
  var currentStates  = compileCurrentState();
  var currentNumbers = compileCurrentNumbers();

  var anyChanges = false;

  var newState = currentNumbers;
  for(x = 0; x < currentNumbers.length; x++){
    for(y = 0; y < currentNumbers[x].length; y++){
      cellId = x + '_' + y;

      anyChanges = setCellStatus(cellId, determineNewState(currentStates[x][y], currentNumbers[x][y])) || anyChanges;
    }
  }

  if (!anyChanges) { window.clearTimeout(intervalID); }

  $('#iterationNumber').text('Iteration: ' + iterationNumber);
}

function setCellStatus(cellId, status) {
  var currentStatus = currentAlive(cellId);
  var changed = true;
  if (!currentStatus && status)
    makeAlive(cellId);
  else if (currentStatus && !status)
    makeDead(cellId);
  else { changed = false; }

  return changed;
}

function makeAlive(cellId) {
  $('#' + cellId).addClass('alive');
  $('#' + cellId).removeClass('was_dead');
}

function makeDead(cellId) {
  $('#' + cellId).removeClass('alive');
  $('#' + cellId).addClass('was_dead');
}


function determineNewState(isAlive, numAlive) {
  var newState;

  if (isAlive){
    if (numAlive == 2 || numAlive == 3) { newState = true; }
    else { newState = false; }
  } else {
    if (numAlive == 3) { newState = true; }
    else { newState = false; }
  }

  return newState;
}
