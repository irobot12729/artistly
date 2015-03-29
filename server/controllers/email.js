require('dotenv').load();
var collections = ['artistly'];
var db = require("mongojs").connect(process.env.ARTISTLY_MONGODB_URL, collections);

function saveEmail(data, reply) {
    db.artistly.save({
        email: data.email,
        hash: data.hash
    }, function(err, success) {
        console.log(success);
        if (err) reply('<span class="error">oops! looks like the server failed. Try again</span>');
        if (success) reply(1);
    });

}

module.exports = {
    storeEmail: {
        handler: function(request, reply) {
            var email = request.payload.email;
            var hash = request.payload.hash;
            db.artistly.findOne({
                email: email
            }, function(err, result) {
                if (err) console.log(err);
                if (result) {
                    reply('You have already submitted your email.');
                } else {
                    var objData = {
                        email: email,
                        hash: hash
                    };
                    saveEmail(objData, reply);
                }
            });


        },
        app: {
            name: 'storeEmail'
        }
    }

};