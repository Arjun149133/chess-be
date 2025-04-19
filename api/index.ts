import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter";
import gameRouter from "./routes/gameRouter";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);
app.use("/api/game", gameRouter);

app.listen(3000);
