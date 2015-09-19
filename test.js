var VK = require('./index.js');

console.log('started');
new VK(
    {
      client_id: 0, // appid,
      login:     '', // could be phone number as well
      pass:      ''
    },
    function (err, access_token, expires_in) {
        if(err)
            return console.error('Unable to authenticate', err);
        console.log('Successfully authenticated / access_token:', access_token);

        /*new VK(
            {
              client_id: 0, // appid,
              login:     '', // could be phone number as well
              pass:      ''
            },
            function (err, access_token) {
                if(err)
                    return console.error('Unable to authenticate', err);
                console.log('Successfully authenticated / access_token:', access_token);
            });*/
    });



console.log('ended');
