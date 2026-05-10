const express = require("express");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.send("Server Running");
});


// GET Routes


// Get all notes
app.get("/notes", (req, res) => {
  res.send("All Notes");
});

// Get single note by id
app.get("/notes/:id", (req, res) => {
  res.send(`Get Note ID: ${req.params.id}`);
});


// POST Routes


// Create note
app.post("/notes", (req, res) => {
  console.log(req.body);
  res.send({
    message: "Note Created",
    data: req.body,
  });
});

--
// PUT Routes


// Full update note
app.put("/notes/:id", (req, res) => {
  res.send({
    message: `Note ${req.params.id} Updated`,
    updatedData: req.body,
  });
});


// PATCH Routes


// Partial update
app.patch("/notes/:id", (req, res) => {
  res.send({
    message: `Note ${req.params.id} Partially Updated`,
    updatedFields: req.body,
  });
});

// DELETE Routes


// Delete note
app.delete("/notes/:id", (req, res) => {
  res.send(`Note ${req.params.id} Deleted`);
});
-
// Query Params Example


app.get("/search", (req, res) => {
  res.send(req.query);
});

// Example:
// /search?title=express&user=vijay


// 404 Route


app.use("*", (req, res) => {
  res.status(404).send("Page Not Found Here");
});

// Server Start
app.listen(3000, () => {
  console.log("The app is starting on port 3000");
});