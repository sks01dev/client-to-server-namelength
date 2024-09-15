  import express from "express";
  import bodyParser from "body-parser";

  const app = express();
  const port = 3000;

  app.use(bodyParser.urlencoded({ extended: true }));


  // GET route for rendering the index page
  app.get("/", (req, res) => {
    res.render("index.ejs");  // Render index.ejs
  });

  // POST route for handling form submission
  app.post("/submit", (req, res) => {
    const numLetters = req.body["fName"].length + req.body["lName"].length;
    res.render("index.ejs", {numberOfLetters: numLetters})
  });

  // Start server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });