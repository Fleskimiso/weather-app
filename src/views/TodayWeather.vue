<template>
  <div>Pogoda na dziś</div>
  <div v-if="store.state.currentWeather">
    <div>Czas: {{ store.state.currentWeather.location.localtime }}</div>

    <div>
      <div>{{ store.state.currentWeather.current.condition.text }}</div>
      <img :src="store.state.currentWeather.current.condition.icon" alt="" />
    </div>

    <div>
      Temperatura: {{ store.state.currentWeather.current.temp_c }} stopni
      Celsjusza
    </div>
    <div>Zachmurzenie: {{ store.state.currentWeather.current.cloud }} %</div>
    <div>Wilgotność: {{ store.state.currentWeather.current.humidity }} %</div>
    <div>Wiatr: {{ store.state.currentWeather.current.wind_kph }} Km/H</div>
    <div>
      Kierunek wiatru: {{ store.state.currentWeather.current.wind_dir }}
    </div>
  </div>
  <div v-else>Czekanie na dane...</div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const store = ref(useStore());
    onMounted(() => {
      if (store.value.state.currentWeather === null) {
        store.value.dispatch("loadCurrentWeather");
      }
    });
    return {
      store: store.value,
    };
  },
};
</script>
