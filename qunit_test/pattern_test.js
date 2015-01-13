  QUnit.module('Pattern Loader');
  QUnit.test("loadPatternFromString", function( assert ) {
    var testInput = '....-' +
                    '.O..-' +
                    '..O.-' +
                    'OOOO-';

    var cells = patternLoader.loadPatternFromString(testInput);

    assert.equal(cells.length, 6);
    assert.equal(cells[0], '1_1');
    assert.equal(cells[1], '2_2');
    assert.equal(cells[2], '0_3');
    assert.equal(cells[3], '1_3');
    assert.equal(cells[4], '2_3');
    assert.equal(cells[5], '3_3');
  });

  QUnit.module('Patterns');
  QUnit.test("loadPatternFromName - cells101", function( assert ) {
    var cells = patternLoader.loadPatternFromName('Cells 101');

    assert.equal(cells.length, 64);
    assert.equal(cells[0],  '6_2');
    assert.equal(cells[19], '7_6');
  });

  QUnit.test("loadPatternFromName - super fountain", function( assert ) {
    var cells = patternLoader.loadPatternFromName('Super Fountain');

    assert.equal(cells.length, 278);
    assert.equal(cells[0],  '15_0');
  });

  QUnit.test("loadPatternFromName - gosper glider gun", function( assert ) {
    var cells = patternLoader.loadPatternFromName('Gosper Glider Gun');

    assert.equal(cells.length, 36);
    assert.equal(cells[0],  '29_2');
  });

  QUnit.test("loadPatternFromName - traffic circle", function( assert ) {
    var cells = patternLoader.loadPatternFromName('Traffic Circle');

    assert.equal(cells.length, 193);
    assert.equal(cells[0],  '21_0');
  });

  QUnit.test("loadPatternFromName - spaceships", function( assert ) {
    var cells = patternLoader.loadPatternFromName('Spaceships');

    assert.equal(cells.length, 295);
    assert.equal(cells[0],  '18_5');
  });

  QUnit.test("loadPatternFromName - hustler", function( assert ) {
    var cells = patternLoader.loadPatternFromName('Hustler');

    assert.equal(cells.length, 30);
    assert.equal(cells[0],  '5_0');
  });

  QUnit.test("loadPatternFromName - edged repair spaceship", function( assert ) {
    var cells = patternLoader.loadPatternFromName('Edge Repair Spaceship');

    assert.equal(cells.length, 63);
    assert.equal(cells[0],  '1_0');
  });


