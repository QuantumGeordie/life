var patternLoader = {
  loadPatternFromName: function(patternName) {
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
      case "Hustler":
        patternContents = hustler;
        break;
      case "Edge Repair Spaceship":
        patternContents = edgeRepairSpaceship;
        break;
      default:
        patternContents = gosperGliderGun;
        break;
    }

    return this.loadPatternFromString(patternContents);
  },

  loadPatternFromString: function(s) {
    lines = s.split("-");
    aliveCells = Array();

    for(lineNum = 0; lineNum < lines.length; lineNum++){
      for(element = 0; element < lines[lineNum].length; element++){
        if(lines[lineNum][element] == 'O') {
          aliveCells.push(element + '_' + lineNum);
        }
      }
    }

    return aliveCells;
  }
}