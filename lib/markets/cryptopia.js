var request = require('request');
 
var base_url = 'https://market-api.merit.me/';
function get_summary(coin, exchange,  cb) {
    var summary = {};
    request({ uri: base_url + '/stats/', json: true }, function (error, response, body) {
        if (error) {
            return cb(error, null);
        } else if (body.Success === true) {
            summary['lastPrice'] = body.Data['lastPrice'].toFixed(8); // / 100000000
            
            return cb(null, summary);
        } else {
            return cb(error, null);
        }
    });
        
}
module.exports = {
    get_data: function (coin, exchange, cb) {
        var error = null;

         get_summary(coin, exchange, function (err, stats) {
             if (err) { error = err; }
             return cb(error, { lastPrice: lastPrice });
                
    }
}
}

