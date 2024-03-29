const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes');
const { config } = require('dotenv');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const {sequelise, connect, init} =require("./dbconfig/dbconfig");
const cors = require('cors');
const app = express();
config();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.routes");
const { JWTController } = require("./controllers/jwt.controller");

app.use(cors({
    origin: 'http://localhost:4200' // Permitir solicitudes solo desde localhost:4200
}));

connect();
init();

app.use("/user", JWTController.verifyAccessToken.bind(JWTController), userRouter);
app.use("/", authRouter);
app.get("/new_access_token", JWTController.grantNewAccessToken.bind(JWTController));

app.get("/", (req, res) => {
    res.send({ message: "Hello you are all the best people" });
});

// Ruta alive
app.get("/alive", (req, res) => {
    res.send({ status: "Server is alive" });
});

// Routes
app.use('/api/user', userRoutes);

module.exports = app;
