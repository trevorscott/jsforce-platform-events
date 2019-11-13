require('dotenv').config()
var jsforce = require('jsforce');

var username = process.env.SF_USERNAME;
var password = process.env.SF_PASSWORD_AND_TOKEN;

var conn = new jsforce.Connection({});
conn.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }
  conn.streaming.topic(`/event/${process.env.EVENT_TO_SUBSCRIBE_TO}`).subscribe(function(message) {
    console.dir(message);
  });
});