const bcrypt = require('bcryptjs');

bcrypt.compare('qwerty', "$2a$10$1y9Y/Hzy2ln8ykXR5ICcwOqG7OfQcuE.Tf0.VNxDc6FPeRjg3pdEe", function(err, res) {
    console.log(res);
});

bcrypt.compare('qwerty', "$2a$10$c1I3f9RP2aorBIJNf6VDt.zfFbdx5e80gI3GYQAIeJcgkzquJATuS", function(err, res) {
    console.log(res);
});

bcrypt.compare('qwerty', "$2a$10$0t.8V4eGdhzKzFaUrGs/feU6tH53Fdf/xDaPbfqMvj5iW6M1Tq0eC", function(err, res) {
    console.log(res);
});