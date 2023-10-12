const swaggerAutogen = require('swagger-autogen')

const outputFile = './swagger.json';

const endpoints = [
    './routes/auth.js'
    // './routes/product.js',
    // './routes/order.js',
]

swaggerAutogen(outputFile, endpoints).then(()=>{
    require('./server')
})