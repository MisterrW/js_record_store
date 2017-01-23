var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.city = city;
  this.records = [];
  this.balance = 0;
}

Store.prototype = {
  list: function(){
    var allRecords = "";
    for(var record of this.records){
      var toAdd = (record.name + " \n Artist: " + record.artist + " \n Price: " + record.price + "\n \n ");
      allRecords = allRecords.concat(toAdd);
      
    }
    console.log(allRecords)
    return allRecords;
  },
  sell: function(recordName){
    for(var record of this.records){
      if(record.name === recordName){
        this.balance += record.price;
        return this.records.splice(this.records.indexOf(record), 1)[0];
      }
    }
  },
  valueOfStock: function(){
    var totalValue = 0;
    for(var record of this.records){
      totalValue += record.price;
    }
    return totalValue;
  },
  financialReport: function(){
    var report = {}
    report.valueOfStock = this.valueOfStock();
    report.balance = this.balance;
    report.totalWorth = report.valueOfStock + report.balance;
    return report;
  }
}

module.exports = Store;