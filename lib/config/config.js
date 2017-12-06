'use strict';

//mongodb default settings
var mongoSettings = {
    useMongoClient: true
};

module.exports = {
    'database': 'mongodb://127.0.0.1:27017/blog',
    mongoSettings: mongoSettings
};