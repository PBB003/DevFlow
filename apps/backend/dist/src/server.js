"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const prisma_1 = require("./lib/prisma");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/health", (req, res) => {
    res.json({ ok: true, message: "DevFlow API running" });
});
app.post("/users", async (req, res) => {
    try {
        const { email, name } = req.body;
        const user = await prisma_1.prisma.user.create({
            data: { email, name },
        });
        res.json(user);
    }
    catch (e) {
        res.status(400).json({ error: "Cannot create user", details: e });
    }
});
exports.default = app;
