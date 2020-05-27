require('dotenv').config()
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const knex = require('../database/dbConfig')
//ADDING IN SESSIONS AND COOKIES TO AUTHORIZATION HEADERS
const session = require('express-session')
const KnexStore = require('connect-session-knex')(session)

// ROUTERS
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");

// CUSTOM MIDDLEWARE
const authMiddleware = require("../auth/authenticate-middleware");

const server = express();

// CREATE SESSION VARIABLE AND SESSION STORE WITH COOKIE INFORMATION
server.use(
    session({
        name: process.env.SESSION_NAME || 'TestSession',
        secret: process.env.SECRET || 'eyItaImQBLyNQTo3h8IZrsEaHM+51CgY0nbxb3rlhg4qYKYWIjvfKvi9LxQI0ubxxGppcj3AlDxKJpmraWsJFA==',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, //24 hours - life of the cookie
            secure: true,
            httpOnly: false,
        },
        store: new KnexStore({
            knex,
            tablename: 'sessionStore',
            createTable: true,
            sidfieldname: 'sid',
            clearInterval: 1000 * 60 * 60 * 25, // 25 hours - clears out all expired sessions
        })
    })
)

server.use(helmet());
server.use(cors({
    credentials: true,
}));
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", authMiddleware, usersRouter);

server.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



server.get('/', (req, res) => {
    res.status(200).json(`Sanity Check`);
});

module.exports = server;
