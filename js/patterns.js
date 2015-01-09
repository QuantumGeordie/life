function loadPatternFromName(patternName) {
  var patternContents;
  switch (patternName) {
    case "Super Fountain":
      patternContents = superFountain;
      break;
    case "Cells 101":
      patternContents = cells101;
      break;
    case "Gosper Glider Gun":
      patternContents = gosperGliderGun;
      break;
    case "Traffic Circle":
      patternContents = trafficCircle;
      break;
    case "Spaceships":
      patternContents = spaceships;
      break;
    default:
      patternContents = gosperGliderGun;
      break;
  }

  console.log('patternContents:\n' + patternContents);

  return loadPatternFromString(patternContents);
}

function loadPatternFromString(s) {
  lines = s.split("-");

  aliveCells = Array();

  for(lineNum = 0; lineNum < lines.length; lineNum++){
    // console.log('line #' + lineNum + ' = ' + lines[lineNum]);
    for(element = 0; element < lines[lineNum].length; element++){
      if(lines[lineNum][element] == 'O') {
        aliveCells.push(element + '_' + lineNum);
      }
    }
  }

  return aliveCells;
}

var superFountain = "...............OO......OO......OO..OO.........-" +
                    ".........OO.....O......O.....O..O..O..O.OO....-" +
                    "....O....O.O.OOO....OO.O.....OO.....OOO.O.O...-" +
                    "...O.O.....O.O.....O..O........OOOOO....O..O..-" +
                    "....O.....O..O....O.O......OOOO..O...OO..O.O..-" +
                    "....O.......OOOO..O.OO....O....OOOOO...O.O..OO-" +
                    "....OOO...O.....O.O..O....OO..O...O..OO.O.O.O.-" +
                    "........OO..O.OO.O.OO....OO..O....O......OO.O.-" +
                    "....O...O......O.O...OO.OO...OOOO....OO.O..O..-" +
                    "...O.....O.O.....O...O.O.OOOOO.O......O.OOO...-" +
                    "....O...OOO.....O....O..........OOO..O........-" +
                    "....OOO.OO..OO..O..OOOO..O.O.OO.O.O..O.OO.....-" +
                    "O...O.........O...OO.OO.O..O......O..O..O.....-" +
                    "....OOO.OO..OO..O..O...OOO......OO....OO......-" +
                    "....O...OOO.....O...O...O.....................-" +
                    "...O.....O.O.....O.....O...O..................-" +
                    "....O...O......O.O..OOO...OO..................-" +
                    "........OO..O.OO.O.O...OO.....................-" +
                    "....OOO...O.....O..O.O...OOO..................-" +
                    "....O.......OOOO...O.OOOO..O..................-" +
                    "....O.....O..O......O....O....................-" +
                    "...O.O.....O.O........O..OO...................-" +
                    "....O....O.O.OOO.....OO.......................-" +
                    ".........OO.....O.............................-" +
                    "...............OO.............................";

var cells101 = "..................-" +
               "....................-" +
               "......OO......OO....-" +
               ".....O.O......O.O...-" +
               ".....O..........O...-" +
               "..OO.O..........O.OO-" +
               "..OO.O.O..OO..O.O.OO-" +
               ".....O.O.O..O.O.O...-" +
               ".....O.O.O..O.O.O...-" +
               "..OO.O.O..OO..O.O.OO-" +
               "..OO.O..........O.OO-" +
               ".....O..........O...-" +
               ".....O.O......O.O...-" +
               "......OO......OO....";

var trafficCircle = ".....................OO....OO...................-" +
                    ".....................O.O..O.O...................-" +
                    ".......................O..O.....................-" +
                    "......................OO..OO....................-" +
                    ".....................OOO..OOO...................-" +
                    ".......................O..O.....................-" +
                    "...............................O................-" +
                    "..............................O.OO..............-" +
                    "..................................O.............-" +
                    "..........................O...O..O.O............-" +
                    "..........................O.....O..O............-" +
                    "..........................O......OO.............-" +
                    ".........OO.....................................-" +
                    "........O..O..........OOO...OOO.................-" +
                    ".......O.O.O....................................-" +
                    "......OOO.O...............O.....................-" +
                    "......OOO.................O.....................-" +
                    "..........................O.....................-" +
                    "............OOO.................................-" +
                    "OO..O................OOO........................-" +
                    "O..OO.....O.....O...............................-" +
                    ".OOOOO....O.....O..O.....O.................O..OO-" +
                    "..........O.....O..O.....O.................OO..O-" +
                    "...................O.....O.......OOO......OOOOO.-" +
                    ".OOOOO......OOO.................................-" +
                    "O..OO................OOO.......O.....O..........-" +
                    "OO..O..........................O.....O....OOOOO.-" +
                    "...............................O.....O.....OO..O-" +
                    "...........................................O..OO-" +
                    ".................................OOO............-" +
                    ".......................................OO.......-" +
                    "......................................OOO.......-" +
                    ".....................................O.OO.......-" +
                    "....................................O.O.........-" +
                    "....................OOO.............O..O........-" +
                    ".....................................OO.........-" +
                    ".............OO....O..O.........................-" +
                    "............O..O................................-" +
                    "............O.O.O...............................-" +
                    ".............O..O...............................-" +
                    ".................O..............................-" +
                    "..............O.O...............................-" +
                    ".....................O..O.......................-" +
                    "...................OOO..OOO.....................-" +
                    "....................OO..OO......................-" +
                    ".....................O..O.......................-" +
                    "...................O.O..O.O.....................-" +
                    "...................OO....OO.....................";

var spaceships = ".........................................................-" +
                ".........................................................-" +
                ".........................................................-" +
                ".........................................................-" +
                ".........................................................-" +
                "..................OO.....................................-" +
                "..........OO....OO.O.O...................................-" +
                ".........OOO....OOOO.....................................-" +
                "........OO......OO.....O.................................-" +
                ".......OO..OO...O..O..O..................................-" +
                "......OO.....O.......O..OO...............................-" +
                "......OO.O...OOOO........................................-" +
                ".........O...OO..OO.O....................................-" +
                "..........OOO....O.O.....................................-" +
                "...........OO...OO..O....................................-" +
                "...........O.....O.......................................-" +
                "......OOOO.O..O..O...O...................................-" +
                "......OOO...OOOOO..OOOOOOO.O.............................-" +
                ".....O.O....O..........O..OO.............................-" +
                ".....OOO.O...O...O.....OOO...............................-" +
                "............O.O..O.......OO..............................-" +
                "......O...O.....OO........OO..O.O........................-" +
                ".........O.......O........OOO.O.OOO......................-" +
                "........O........OOO......O....O.........................-" +
                "..........O......O.O.....O.O.............................-" +
                "..........O......O.OO...O....O...........................-" +
                "..................O.OOOO...O.....O..O....................-" +
                ".................OO..OO.O.O...O.OOO......................-" +
                "......................O......O..OOO...OOO................-" +
                ".........................O..O......OO....................-" +
                ".....................OO....O..O..........OO..............-" +
                ".......................O.............O...O...............-" +
                ".....................OO....OO........O...................-" +
                "......................O...OOO........O.O.O.O.............-" +
                "......................O....OO........O.....OO............-" +
                ".............................O........O..OOO.............-" +
                "..........................O..O........O........O.........-" +
                "...............................OOOO........OO...O........-" +
                "............................O......OO......OO...O........-" +
                "............................O....O............O..........-" +
                "............................O...............O............-" +
                "..............................OO.O.O.......O..O..........-" +
                "..............................O....O.........OOO.........-" +
                ".................................OOO.OO..O...O...O.OO....-" +
                "..................................O..OO.O.....O...O..O...-" +
                "..........................................OO..O...O......-" +
                ".......................................O.OO.OO.O..OO...O.-" +
                "....................................O.....O...O.......O.O-" +
                ".....................................OO............OO...O-" +
                "...........................................O.......OO....-" +
                "............................................OOO...OO..O..-" +
                "...........................................O..O.OOO......-" +
                "...........................................O....OO.......-" +
                "............................................O............-" +
                "...............................................O..O......-" +
                "..............................................O..........-" +
                "...............................................OO........-";

var gosperGliderGun = ".........................................-" +
                      ".........................................-" +
                      ".............................O...........-" +
                      "...........................O.O...........-" +
                      ".................OO......OO............OO-" +
                      "................O...O....OO............OO-" +
                      ".....OO........O.....O...OO..............-" +
                      ".....OO........O...O.OO....O.O...........-" +
                      "...............O.....O.......O...........-" +
                      "................O...O....................-" +
                      ".................OO......................";