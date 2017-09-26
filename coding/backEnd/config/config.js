const key = "helloworld"

var env = process.env.NODE_ENV || 'development';

var config = {
    test: {
        PORT: 3000,
        db: 'ENoticeTest',
        MONGODB_URI: 'mongodb://localhost:27017/ENoticeTest',
        SESSION_KEY: key
    },
    development: {
        PORT: 3000,
        db: 'ENotice',
        MONGODB_URI: 'mongodb://localhost:27017/ENotice',
        SESSION_KEY: key
    }
}

if (env === 'development' || env === 'test') {
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}