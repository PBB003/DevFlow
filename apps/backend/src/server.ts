import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./lib/prisma";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ ok: true, message: "DevFlow API running" });
});

app.post("/users", async (req, res) => {
    try {
        const { email, name } = req.body;

        const user = await prisma.user.create({
            data: { email, name },
        });

        res.json(user);
    } catch (e) {
        res.status(400).json({ error: "Cannot create user", details: e });
    }
});



export default app;