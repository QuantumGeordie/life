QUnit.module('Board');
QUnit.test("build and clear", function( assert ) {
  board.clear();

  board.build(4, 5);
  var rows = $('.row');

  assert.equal(rows.length, 5, 'number of rows created with build.');
  assert.equal(rows[0].children.length, 4, 'number of columns created with build.');

  board.clear();
  rows = $('.row');
  assert.equal(rows.length, 0, 'should be no rows after clear().');

  board.build(23, 17);
  rows = $('.row');
  assert.equal(rows.length, 17, 'number of rows created with build.');
  assert.equal(rows[0].children.length, 23, 'number of columns created with build.');

  board.clear();
});

QUnit.test("reset", function(assert) {
  $("<div id='x_dimension'></div>").val(10).appendTo('body');
  $("<div id='y_dimension'></div>").val(8).appendTo('body');

  board.reset(['1_1', '2_2']);

  rows = $('.row');
  assert.equal(rows.length, 8, 'number of rows created with build.');
  assert.equal(rows[0].children.length, 10, 'number of columns created with build.');

  assert.equal($('.alive').length, 2, 'number of alive cells after reset');
});
