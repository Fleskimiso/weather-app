import { createStore } from "vuex";

export default createStore({
  state: {
    currentWeather: null,
    forecastData: null,
    errorMessage: null,
    city: "Lublin",
  },
  mutations: {},
  actions: {
    async loadCurrentWeather() {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=8a982b1e7b074d7c8c3151439213006&q=" +
          this.state.city +
          "&aqi=no"
      );
      if (response.status === 200) {
        this.state.currentWeather = await response.json();
      } else {
        this.state.errorMessage = `Couldn't get data from the api. status:${response.status} statusText:${response.statusText} `;
      }
    },
    async loadForecast() {
      //forecast for 2 days... might add for longer periods but I don't think i need for longer
      const response = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=8a982b1e7b074d7c8c3151439213006&q=" +
          this.state.city +
          "&days=2&aqi=no&alerts=no"
      );
      if (response.status === 200) {
        this.state.forecastData = await response.json();
      } else {
        this.state.errorMessage = `Couldn't get data from the api. status:${response.status} statusText:${response.statusText} `;
      }
    },
  },
  modules: {},
});
