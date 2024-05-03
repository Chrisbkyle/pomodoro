const express = require('express');
const cors = require('cors');
// const dbConnect = require('./db/dbConnect');
const http = require('http'); 
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const PORT = 3001;

const server = http.createServer(app)

const whitelist = ['']
const corsOptions = {
    origin: function (origin, callback) {
        if(!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: 'This is Pomodoro, your efficiency assisstant'})
});

const userRouter = require('./router/userRouter')

app.use('/api', userRouter)

server.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)
})


