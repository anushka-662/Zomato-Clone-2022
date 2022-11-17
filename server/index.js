import express from "express";
import dotenv from "dotenv";

//Database Connection
import ConnectDB from "./database/connection";

dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is Running",
  });
});

const PORT = 8080;
zomato.listen(PORT, () => {
  ConnectDB()
    .then(() => {
      console.log("SERVER IS RUNNING");
    })
    .catch((error) => {
      console.log("SERVER RUNNING BUT CONNECTION TO DB FAILED!");
      console.log(error);
    });
});
