const Range = require('./range');

class Of extends Range {
  constructor(start, stop) {
    super('Of', start, stop);
  }

  update(n) {
    if(this.start<n&&n<this.stop){
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
}

module.exports = Of;
