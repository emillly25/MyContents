import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import { contentRouter } from "./routers/contentRouter";
import { loginRouter } from "./routers/loginRouter";
import { registerRouter } from "./routers/registerRouter";

const app = express();

// CORS 에러 방지
app.use(
  cors({
    origin: true,
    credentials: true, // 크로스 도메인 허용
    methods: ["POST", "PATCH", "GET", "DELETE", "OPTIONS", "HEAD"],
  })
);

//body-parser 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/", contentRouter);
app.use("/api/content", contentRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.use(express.static(path.join(__dirname, "../build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

export { app };
