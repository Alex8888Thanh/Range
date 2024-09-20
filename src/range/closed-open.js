const Range = require('./range');

class ClosedOpen extends Range {
  constructor(start, stop) {
    super('ClosedOpen', start, stop);
  }

  contains(n) {
    if(this.start<=n&&n<this.stop){
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
}

module.exports = ClosedOpen;
