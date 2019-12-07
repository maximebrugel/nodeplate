import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

import swagger from "./swagger";

// Create Express server
const app = express(),
  swaggerSpec = swaggerJsdoc(swagger),
  swaggerUiHandler = swaggerUiExpress.setup(swaggerSpec),
  docsJsonPath = "/api-docs.json";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// swagger Documentation
app.get(docsJsonPath, (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.use("/docs", swaggerUiExpress.serve, (req: any, res: any, next: any) => {
  if (!req.query.url) {
    res.redirect(
      `/docs?url=${req.protocol}://${req.headers.host}${docsJsonPath}`
    );
  } else {
    swaggerUiHandler(req, res, next);
  }
});

export default app;
