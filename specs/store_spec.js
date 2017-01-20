var assert = require('assert');
var Store = require('../store');
var Record = require('../record');

describe("store", function(){
  var store;
  beforeEach(function(){
    store = new Store("Billy's Beats", "Denver");
    store.records.push(new Record("Guns And Roses", "Appetite For Destruction", 10));
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
  it("returns list", function(){
    assert.equal(store.list().slice(0,8), "Appetite");
  })
  it("can sell record", function(){
    assert.deepEqual(store.sell("Appetite For Destruction"), new Record("Guns And Roses", "Appetite For Destruction", 10));
    assert.equal(store.balance, 10);
  })
  it("produces financial report", function(){
    var report = store.financialReport();
    assert.equal(report.totalWorth, 25.50);
  })
})