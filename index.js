// import the server and start it!
require('dotenv').config()
const server = require('./api/server')

const PORT = process.env.PORT || 9000

server.get('/', (req,res,next) => {
    res.send('Server is working!')
})

server.listen(PORT, () => {
    console.log(`\n===Server is running on port ${PORT}===\n`)
})