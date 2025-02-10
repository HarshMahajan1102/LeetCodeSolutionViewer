// I have generated this entire code through ChatGPT, as I have no knowledge of Backend and one knowledgable
// person had told me that I should not put my Personal Access Token directly in script.js as It could highly 
// dangerous to me

// After that I have put my PAT in .env file which I declared in .gitignore so that it would be ignored by Github

require("dotenv").config(); 
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.get("/github", async (req, res) => {
  try {
    const headers = { Authorization: `token ${GITHUB_TOKEN}` };
    const response = await axios.get("https://api.github.com/repos/haoel/leetcode", { headers });
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));