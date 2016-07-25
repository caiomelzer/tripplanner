// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '174016699678232', // your App ID
        'clientSecret'    : '91df1b02333c6040daaa53b391474d82', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'J7MMgYvqp6BE9ehN4LuQAfN9e',
        'consumerSecret'     : 'tFTtJZwKKfbBedW71BJ9EKV1LWyp8aNkw0lMO3zlFeO0bKy8zZ',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '708513885033-nfqp9skf061e9h8avmn4mntknjrtr0nk.apps.googleusercontent.com',
        'clientSecret'     : 'xBZitxn8nKC2q-gipGhiLkpx',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
