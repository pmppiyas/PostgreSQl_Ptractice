const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Sarver is runnig" });
  } catch {
    res.status(500).json({
      message: "Internet Sarver Error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Sarver is Runnig on Port ${PORT}`);
});
