const express = require("express");
const app = express();

const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Sarver is runnig" });
  } catch {
    res.status(500).json({
      message: "Internet Sarver Error",
    });
  }
});

app.get("/books", async (req, res) => {
  try {
    res.status(200).json({ message: "All Book Accessed" });
  } catch {
    res.status(500).json({
      message: " Internet Server Error",
    });
  }
});

app.get("/book/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json({
      message: `Your Book Id Is ${id}`,
    });
  } catch {
    res.status(200).json({
      message: "Internet Server Error",
    });
  }
});

app.post("/book", async (req, res) => {
  try {
    const { name, description } = req.body;
    res.status(201).json({
      message: `Book Posted, Book name: ${name}, Description: ${description}`,
    });
  } catch {
    res.status(500).json({
      message: "Internet Server Error",
    });
  }
});

app.put("/book/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    res.status(200).json({
      message: `Book with id: ${id} Edited New Name: ${name}, Description: ${description}`,
    });
  } catch {
    res.status(500).json({
      message: "Internet Server Error",
    });
  }
});

app.delete("/book/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      message: `Book with ID ${id} deleted successfully`,
    });
  } catch {
    res.status(500).json({
      message: "Internet Server Error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Sarver is Runnig on Port ${PORT}`);
});
