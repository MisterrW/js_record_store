var Customer = function(){
  this.cash = 100;
  this.records = [];
}

Customer.prototype = {
  buy: function(record){
    if(this.cash >= record.price){
      this.cash -= record.price;
      this.records.push(record);
    } else {
      return("Too rich for my blood");
    }
  },
  sell: function(recordName){
    for(var record of this.records){
      if(record.name === recordName){
        this.cash += record.price;
        return this.records.splice(this.records.indexOf(record), 1)[0];
      }
    }
  }
}

module.exports = Customer;