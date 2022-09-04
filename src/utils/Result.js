class Result {
    constructor({ success = false, message = "Failure", data = null }) {
      this.success = success;
      this.message = message;
      this.data = data;
    }
  }
  
  module.exports = Result;
  