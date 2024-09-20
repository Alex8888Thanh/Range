const Range = require('./range');

class Open extends Range {
  constructor(start, stop) {
    super('Open', start, stop);
  }

  contains(n) {
    if(this.start<n&&n<this.stop){
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
}

module.exports = Open;
