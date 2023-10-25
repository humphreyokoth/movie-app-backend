const swaggerAutogen = require('swagger-autogen')

const outputFile = './swagger.json';

const endpoints = [
    './routes/auth.js',
    './routes/movie.js',
    './routes/image.js',
]

swaggerAutogen(outputFile, endpoints).then(()=>{
    require('./server')
})