var assert = require('assert');
var Record = require('../record');

describe("record", function(){
  var record;
  beforeEach(function(){
    record = new Record("Guns And Roses", "Appetite For Destruction", 9.99);
  })
  it("has a name", function(){
    assert.equal(record.name, "Appetite For Destruction");
  })
  it("has an artist", function(){
    assert.equal(record.artist, "Guns And Roses");
  })
  it("has a name", function(){
    assert.equal(record.price, 9.99);
  })
})