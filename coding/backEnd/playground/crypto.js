const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                    .update('I love cupcakes')
                    .digest('hex');
//const hash = crypto.randomBytes(256).toString('hex')
console.log(hash);