const express = require(`express`);
const dotenv = require(`dotenv`);
const cors = require(`cors`);
const mongoose = require(`mongoose`);
const userRoutes = require(`./Routes/UserRoutes`);

const app = express();
dotenv.config();
const port = process.env.PORT;

// middlewires
app.use(cors());
app.use(express.json());

app.use(`/api/auth`, userRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
