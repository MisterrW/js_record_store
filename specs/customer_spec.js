var assert = require('assert');
var Store = require('../store');
var Record = require('../record');
var Customer = require('../customer');

describe("store", function(){
  var store;
  var customer;
  beforeEach(function(){
    store = new Store("Billy's Beats", "Denver");
    store.records.push(new Record("Guns And Roses", "Appetite For Destruction", 10));
    store.records.push(new Record("Velvet Revolver", "Contraband", 8.50));
    store.records.push(new Record("Soundgarden", "Superunknown", 7.00));
    customer = new Customer();

  })
  it("can buy record", function(){
    customer.buy(store.sell("Appetite For Destruction"));
    assert.equal(customer.cash, 90);
    assert.deepEqual(customer.records[0], new Record("Guns And Roses", "Appetite For Destruction", 10));
  })
  it("can sell record", function(){
    customer.buy(store.sell("Appetite For Destruction"));
    assert.deepEqual(customer.sell("Appetite For Destruction"), new Record("Guns And Roses", "Appetite For Destruction", 10));
    assert.equal(customer.cash, 100);
  })
  it("cannot buy if no funds", function(){
    customer.cash = 0;
    assert.equal(customer.buy(new Record("Guns And Roses", "Appetite For Destruction", 10)), "Too rich for my blood");
  })
})