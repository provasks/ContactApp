
(function(){
  var crypto = require('crypto');

  this.getMD5Hash = function (data) {
    return crypto.createHash('md5').update(data).digest("hex");
  };
})();
