"use strict";

const express = require("express");
const app = express();

// 4_1.1
app.get("/math/circle/:r", (req, res) => {
  const r = parseFloat(req.params.r);

  if (isNaN(r) || r < 0) {
    return res.status(400).json({ error: "Promień musi być liczbą nieujemną" });
  }

  const result = {
    area: (Math.PI * r * r).toFixed(2),
    circumference: (2 * Math.PI * r).toFixed(2),
  };

  res.json(result);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
