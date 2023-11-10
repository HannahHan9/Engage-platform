const express = require("express");
require("dotenv").config();
const axios = require("axios");
const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));

app.get("/users", async (req, res) => {

  const options = {
    method: "GET",
    url: "https://api.engageesp.com/ext/v1/users",
    params: req.query,
    headers: {
      tenantId: process.env.VITE_TENANTID,
      Authorization: process.env.VITE_AUTHORIZATION,
    },
  };
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});
