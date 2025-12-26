import dotenv from "dotenv";
import app from "./server";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function bootstrap() {
    try {
        app.listen(PORT, () => {
            console.log(`DevFlow API running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}

bootstrap();
