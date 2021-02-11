const express = require('express');
require('./db/mongoose');
const movieRouter = require('./routers/movie');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Routing is working")
})
app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log('Server is listening on', port)
});
