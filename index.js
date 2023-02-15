const express = require('express');

const app = express();
const i18n = require('i18n');
const moment = require("moment");
const logger = require('./src/config/winston');
const morgan = require('morgan');
const bodyParser = require("body-parser")
const {
    default: helmet
} = require('helmet');

const routes = require('./src/routes/routes');

app.use(
    morgan(
        ':remote-addr [:date[clf]] ":method :url HTTP/:http-version" RequestID: :res[x-request-id] :status :res[content-length] ":referrer" ":user-agent"', {
            stream: logger.stream,
        }
    )
);
app.use(helmet());
app.use(bodyParser.json());

// Process ping
app.get('/ping', async (req, res) => {
    return res.send({
        status: 'pong',
        language: i18n.getLocale(),
        uptime: process.uptime(),
    });
});

app.use('/', routes);
app.listen(4000, () => {
    logger.info(`Init at ${moment(new Date()).format("DD/MM/YYYY HH:mm:ss")}`);
    console.log('Running this lovely Ebury project example at port 4000!');
});