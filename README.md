# Weather-App

Weather-App is a web application that allows users to check the weather of any city. It provides the weather description, temperature in degrees Celsius, and humidity using the OpenWeather API. The project uses Node.js and Express.js to set up a backend server, EJS for rendering the frontend, and Axios for making HTTP requests to the API. dotenv is used for managing environment variables, including the API key.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Project Overview
The Weather-App application fetches weather data for any city and displays it on a web page. The project demonstrates how to set up a backend server using Node.js and Express.js, use EJS for dynamic HTML rendering, make HTTP requests using Axios, and manage environment variables using dotenv.

## Tech Stack
- **CSS3**: For styling the web page.
- **Node.js**: For setting up the backend server.
- **Express.js**: For managing server-side logic and routing.
- **EJS**: For rendering dynamic content on the web page.
- **Axios**: For making HTTP requests to the OpenWeather API.
- **dotenv**: For managing environment variables.

## Features
- **Weather Data Fetching**: Retrieves weather details for any city from the OpenWeather API and displays them on the web page.
- **Backend Server**: Uses Node.js and Express.js to handle server-side logic and routing.
- **Dynamic Rendering**: Utilizes EJS to render dynamic content on the frontend.
- **API Integration**: Demonstrates how to fetch data from an external API using Axios.
- **Environment Variables**: Uses dotenv to manage sensitive information like API keys.

## Getting Started
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js installed on your local machine
- A code editor (e.g., VSCode)
- An OpenWeather API key

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ManavNakai/Weather-App.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Weather-App
   ```
3. Install the required dependencies:
   ```sh
   npm install
   ```

4. To create an API key for the OpenWeather API, follow these steps:

   4.1. **Sign Up or Log In**:
   - Go to the [OpenWeather website](https://openweathermap.org/).
   - If you don't have an account, click on "Sign Up" and fill out the registration form. If you already have an account, click on "Sign In" and log in with your credentials.
   
   4.2. **Navigate to the API Section**:
   - Once logged in, go to the "API" section in the top menu.

   4.3. **Select a Plan**:
   - OpenWeather offers different API plans, including a free tier. Choose the plan that fits your needs. For most basic usage, the free tier is sufficient.

   4.4. **Get Your API Key**:
   - After selecting a plan, you will be redirected to your account's API keys page.
   - If you don’t see an API key, create one by clicking on the "Generate" button or similar option.

   4.5. **Copy Your API Key**:
   - Your API key will be displayed on the screen. Copy this key, as you will need it to authenticate your requests to OpenWeather API.

5. Create a `.env` file in the project root and add your OpenWeather API key:
   ```
   API_KEY=your_openweather_api_key
   ```
6. Start the server:
   ```sh
   node index.js
   ```
7. Open your web browser and go to `http://localhost:3000`.

## Usage
- Open your web browser and navigate to `http://localhost:3000`.
- Enter the name of a city in the search box and submit.
- The page will display the weather description, temperature in degrees Celsius, and humidity for the requested city.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have suggestions for improving the project, please follow these steps:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Links
Project Link: [https://github.com/ManavNakai/Weather-App](https://github.com/ManavNakai/Weather-App)

Api Link: [https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric](https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric)

---

Feel free to reach out if you have any questions or need further assistance! Thank you for checking out Weather-App!
