import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import env from "dotenv";

env.config();
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/get-weather", async (req, res) => {
  try {
    const city = req.body.cityInput;
    const apikey = process.env.API_KEY;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
    const name= response.data.name;
    const description= response.data.weather[0].description;
    const temperature= response.data.main.temp+"℃";
    const humidity= response.data.main.humidity;
    res.render("index.ejs", { name:name, description:description, temperature:temperature, humidity:humidity});
  } catch (error) {
    console.log(error);
    const weatherInfo = "Failed to fetch weather data. Please try again later.";
    res.render("index.ejs", { error: weatherInfo });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});