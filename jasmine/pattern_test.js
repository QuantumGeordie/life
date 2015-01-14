describe("Patterns", function() {
  describe("Pattern Loader", function() {
    it("loads a pattern from a string with loadPatternFromString()", function() {
      var testInput = '....-' +
                      '.O..-' +
                      '..O.-' +
                      'OOOO-';

      var cells = patternLoader.loadPatternFromString(testInput);

      expect(cells.length).toEqual(6);
      expect(cells[0]).toEqual('1_1');
      expect(cells[1]).toEqual('2_2');
      expect(cells[2]).toEqual('0_3');
      expect(cells[3]).toEqual('1_3');
      expect(cells[4]).toEqual('2_3');
      expect(cells[5]).toEqual('3_3');
    });
  });

  describe("Pattern Library", function() {

    it("loadPatternFromName - cells101", function() {
      var cells = patternLoader.loadPatternFromName('Cells 101');

      expect(cells.length).toEqual(64);
      expect(cells[0]).toEqual('6_2');
      expect(cells[19]).toEqual('7_6');
    });

    it("loadPatternFromName - super fountain", function() {
      var cells = patternLoader.loadPatternFromName('Super Fountain');

      expect(cells.length).toEqual(278);
      expect(cells[0]).toEqual('15_0');
    });

    it("loadPatternFromName - gosper glider gun", function() {
      var cells = patternLoader.loadPatternFromName('Gosper Glider Gun');

      expect(cells.length).toEqual(36);
      expect(cells[0]).toEqual('29_2');
    });

    it("loadPatternFromName - traffic circle", function() {
      var cells = patternLoader.loadPatternFromName('Traffic Circle');

      expect(cells.length).toEqual(193);
      expect(cells[0]).toEqual('21_0');
    });

    it("loadPatternFromName - spaceships", function() {
      var cells = patternLoader.loadPatternFromName('Spaceships');

      expect(cells.length).toEqual(295);
      expect(cells[0]).toEqual('18_5');
    });

    it("loadPatternFromName - hustler", function() {
      var cells = patternLoader.loadPatternFromName('Hustler');

      expect(cells.length).toEqual(30);
      expect(cells[0]).toEqual('5_0');
    });

    it("loadPatternFromName - edged repair spaceship", function() {
      var cells = patternLoader.loadPatternFromName('Edge Repair Spaceship');

      expect(cells.length).toEqual(63);
      expect(cells[0]).toEqual('1_0');
    });

  });

});

