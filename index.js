const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI server is running");
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/webhooks/openai", (req, res) => {
  console.log("Webhook received:", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Running on ${HOST}:${PORT}`);
});
