import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import mapRouter from "./router/map";

dotenv.config({ path: ".env" });
const app = express();

app.set("port", process.env.PORT || 3003);

app.use(cors());

app.use("/v1/fetchMap", mapRouter);

app.listen(process.env.PORT || 5003);

export default app;
