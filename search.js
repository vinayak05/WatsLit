var querystring = require('querystring');
var https = require('https');
//Instantiate the client 
var uwaterlooApi = require('uwaterloo-api'); 
var uwclient = new uwaterlooApi({
  API_KEY : 'e4ddfdb1f26c7f9bc1a6b2084fcddee2'
});


module.exports = {
    searchEventsByType: function(query,callback){
        uwclient.get('/events', function(err, res) {
            var obj = [];
           for(var i = 0; i < res.data.length; i++){
                var curr = res.data[i];
                if(curr.type.includes(query)){
                    obj.push(curr);
                }
           }
           callback(JSON.stringify(obj));
        })
    },
    searchEventsByDate: function(query,callback){
        uwclient.get('/events', function(err, res) {
            var obj = [];
           for(var i = 0; i < res.data.length; i++){
                var curr = res.data[i];
                var startDate = new Date(curr.times[0].start);
                var endDate = new Date(curr.times[0].end);
                var d = new Date();
                console.log(curr.times[0].start);
                if(d > startDate){
                   obj.push(curr);
                }
           }
           callback(JSON.stringify(obj));
        })
    }
    
}

