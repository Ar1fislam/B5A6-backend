import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.set("trust proxy", 1);

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://digital-wallet-api-frontend.vercel.app",
        "https://www.digital-wallet-api-frontend.vercel.app",
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(cookieParser());

app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Digital Wallet App Backend!" });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
