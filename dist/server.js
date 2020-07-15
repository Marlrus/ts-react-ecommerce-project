"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const compression_1 = __importDefault(require("compression"));
const enforce = __importStar(require("express-sslify"));
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express_1.default();
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build')));
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.join(__dirname, '../client/build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`)).on('error', (err) => {
    throw err;
});
app.get('/service-worker.js', (req, res) => {
    res.send(path_1.default.resolve(__dirname, '../client/build', 'serviceWorker.js'));
});
app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd',
    };
    stripe.charges.create(body, (err, response) => {
        err
            ? res.status(500).send({ error: err })
            : res.status(200).send({ success: response });
    });
});
