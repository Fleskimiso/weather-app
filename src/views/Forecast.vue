<template>
  <div class="about">
    <h1>Prognoza na dwa dni</h1>
  </div>

  <div v-for="forecastDay in forecast.forecastday" :key="forecastDay.date">
    <!-- overall day information etc  -->
    <!-- hour information temp, chance of rain, and clouds  -->
    <div>
      <div>Data: {{ forecastDay.day.date }}</div>
      <div>Maksymalna temperatura: {{ forecastDay.day.maxtemp_c }}</div>
      <div>Szansa na deszcz: {{ forecastDay.day.daily_chance_of_rain }} %</div>
      <div>Średnia wilgotność: {{ forecastDay.day.avghumidity }} %</div>
      <div>
        Maksymalna prędkość wiatru: {{ forecastDay.day.maxwind_kph }} Km/h
      </div>
    </div>

    <div v-for="hour in forecastDay.hour" :key="hour.time_epoch">
      <!-- display condition and image -->
      <div>Godzina: {{ hour.time.substring(hour.time.length - 5) }}</div>
      <div>
        {{ hour.condition.text }}
        <img :src="hour.condition.icon" />
      </div>
      <div>Temperatura: {{ hour.temp_c }}</div>
      <div>
        Czy będzie padać: {{ hour.will_it_rain == 1 ? "Tak" : "Nie" }}
        <div></div>
        Szansa na deszcz: {{ hour.chance_of_rain }} %
      </div>
      <div>Zachmurzenie: {{ hour.cloud }} %</div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      if (store.state.forecast === null) {
        store.dispatch("loadForecast");
      }
      //TODO forecasts, should be easy, just display hourly temp, clouds, conditions, chance of rain, wind etc
      return {
        forecast: store.state.forecastData.forecast,
      };
    });
  },
};
</script>
