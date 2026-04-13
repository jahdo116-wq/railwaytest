import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// optional: route logging (useful for your tracking)
app.get("/track", (req, res) => {
  console.log("IP:", req.ip, "UA:", req.headers["user-agent"]);
  res.redirect("/"); // or redirect anywhere
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
