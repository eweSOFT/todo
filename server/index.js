const express = require('express');
const app = express();

const tasks = require("./routes/task");
const connection = require("./db");
const cors = require("cors");

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

