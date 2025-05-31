import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/databaseConnection.js";

dotenv.config({
  path: ".env",
});

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`\nShutting down the server due to Uncaught Exception !!!`);
  process.exit(1);
});

// app.listen(process.env.PORT || 8000, () => {
//   console.log(`Server is running at port : ${process.env.PORT}`);
// });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
