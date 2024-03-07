"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weatherRoutes_js_1 = __importDefault(require("./routes/weatherRoutes.js"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
//our new route
app.use("/api/weather", weatherRoutes_js_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
