import express from "express";
import dotenv from "dotenv";

dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is Running",
  });
});

const PORT = 1206;
zomato.listen(PORT, () => {
  console.log("SERVER IS RUNNING!!!!");
});
