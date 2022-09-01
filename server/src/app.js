import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { contentRouter } from "./routers/contentRouter";

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

app.use("/", contentRouter);
app.use("/api/content", contentRouter);

export { app };
