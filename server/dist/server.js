"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use('/api/game', gameRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello from Express server!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
exports.default = app;
