class Report{
  constructor(){
    this.green = 0
    this.red = 0
    this.amber = 0
  }
  addValues(values){
    values.split(",").forEach(function(value){
      if('red'== value){
        this.red += 1
      } else if('green'== value) {
        this.green += 1

      }else {
        this.amber +=1
      };
    }.bind(this));
  };

showReport(){
  return `green = ${this.green}, red = ${this.red}, amber = ${this.amber}`
}
}

module.exports= Report
