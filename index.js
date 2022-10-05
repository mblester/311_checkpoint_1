const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const appointmentsRouter = require("./routes/appointments");

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json());

app.use("/api", appointmentsRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
