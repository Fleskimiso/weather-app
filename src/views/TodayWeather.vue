<template>
  <div >Pogoda na dziś</div>
  <div>
    <div>Czas: {{ time }}</div>

    <div>
      <div>{{ conditionText }}</div>
      <img :src="conditionIconUrl" alt="" />
    </div>

    <div>Temperatura: {{ temperaturaC }} stopni Celsjusza</div>
    <div>Zachmurzenie: {{ cloudsPercent }} %</div>
    <div>Wilgotność: {{ humidityPercent }} %</div>
    <div>Wiatr: {{ windKPH }} Km/H, Kierunek: {{ windDirection }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    if (store.state.currentWeather === null) {
      store.dispatch("loadCurrentWeather");
    }

    return {
      time: store.state.currentWeather.location.localtime,
      temperaturaC: store.state.currentWeather.current.temp_c,
      humidityPercent: store.state.currentWeather.current.humidity,
      cloudsPercent: store.state.currentWeather.current.cloud,
      conditionText: store.state.currentWeather.current.condition.text,
      conditionIconUrl: store.state.currentWeather.current.condition.icon,
      windKPH: store.state.currentWeather.current.wind_kph,
      windDirection: store.state.currentWeather.current.wind_dir,
    };
  },
};
</script>
