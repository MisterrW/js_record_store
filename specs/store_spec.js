var assert = require('assert');
var Store = require('../store');
var Record = require('../record');

describe("store", function(){
  var store;
  beforeEach(function(){
    store = new Store("Billy's Beats", "Denver");
    store.records.push(new Record("Guns And Roses", "Appetite For Destruction", 9.99));
    store.records.push(new Record("Velvet Revolver", "Contraband", 8.50));
    store.records.push(new Record("Soundgarden", "Superunknown", 7.00));

  })
  it("has a name", function(){
    assert.equal(store.name, "Billy's Beats");
  })
  it("has a city", function(){
    assert.equal(store.city, "Denver");
  })
  it("has records", function(){
    assert.equal(store.records.length, 3);
  })

})