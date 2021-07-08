<template>
  <div class="has-text-centered has-text-black pb-3">Pogoda na dziś</div>
  <div
    class="is-flex is-flex-direction-row is-justify-content-center"
    v-if="store.state.currentWeather"
  >
    <div class="has-text-left">
      <div>Czas: {{ store.state.currentWeather.location.localtime }}</div>

      <div
        class="
          is-flex
          is-flex-direction-row
          is-justify-content-center
          is-align-items-center
        "
      >
        <div>{{ store.state.currentWeather.current.condition.text }}</div>
        <img :src="store.state.currentWeather.current.condition.icon" alt="" />
      </div>

      <div class="has-text-weight-bold">
        Temperatura: {{ store.state.currentWeather.current.temp_c }} stopni
        Celsjusza
      </div>
      <div class="has-text-weight-bold">
        Zachmurzenie: {{ store.state.currentWeather.current.cloud }} %
      </div>
      <div class="has-text-weight-bold">
        Wilgotność: {{ store.state.currentWeather.current.humidity }} %
      </div>
      <div class="has-text-weight-bold">
        Wiatr: {{ store.state.currentWeather.current.wind_kph }} Km/H
      </div>
      <div class="has-text-weight-bold">
        Kierunek wiatru: {{ store.state.currentWeather.current.wind_dir }}
      </div>
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
