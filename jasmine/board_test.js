describe("Board", function() {

  beforeEach(function() {
    board.clear();
  });

  it("builds and clears the board", function() {
    board.build(4, 5);
    var rows = $('.row');

    expect(rows.length).toEqual(5);
    expect(rows[0].children.length).toEqual(4);

    board.clear();
    rows = $('.row');
    expect(rows.length).toEqual(0);

    board.build(23, 17);
    rows = $('.row');
    expect(rows.length).toEqual(17);
    expect(rows[0].children.length).toEqual(23);
  });

  it("resets the board", function() {
    $("<div id='x_dimension'></div>").val(10).appendTo('body');
    $("<div id='y_dimension'></div>").val(8).appendTo('body');

    board.reset(['1_1', '2_2']);

    rows = $('.row');
    expect(rows.length).toEqual(8);
    expect(rows[0].children.length).toEqual(10);

    expect($('.alive').length).toEqual(2);
  });
});